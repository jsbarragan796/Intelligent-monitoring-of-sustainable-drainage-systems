
const { MONGODB_URI, KAFKA_TOPIC_EVENT, KAFKA_TOPIC_NOTIFICATION, NOTIFICATION_STARTED_RAINING } = require('../config')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

module.exports = (producer) => {
  const findMostRecentEvent = () => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(MONGODB_URI, { useNewUrlParser: true }, async (err, client) => {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          let Events = client.db().collection('Event')
          const event = await Events.findOne({}, { sort: { startDate: -1 } })

          client.close()
          resolve(event)
        }
      })
    })
  }

  const endEventAndCreateOne = (_id, timestamp, mostRecentEventLastMeasurementDate) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(MONGODB_URI, { useNewUrlParser: true }, async (err, client) => {
        if (err) reject(err)
        else {
          const Events = client.db().collection('Event')

          await Events.updateOne({ _id: ObjectID(_id) }, {
            $set: { finishDate: mostRecentEventLastMeasurementDate }
          })

          await Events.insertOne({
            startDate: timestamp, lastMeasurementDate: timestamp
          })

          producer.produce(KAFKA_TOPIC_EVENT, null, Buffer.from(_id.toString()))
          producer.produce(KAFKA_TOPIC_NOTIFICATION, null, Buffer.from(NOTIFICATION_STARTED_RAINING))

          client.close()
          resolve()
        }
      })
    })
  }

  const updateLastMeasurementDate = (_id, timestamp) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(MONGODB_URI, { useNewUrlParser: true }, async (err, client) => {
        if (err) reject(err)
        else {
          const Events = client.db().collection('Event')

          await Events.updateOne({ _id }, {
            $set: { lastMeasurementDate: timestamp }
          })

          client.close()
          resolve()
        }
      })
    })
  }

  return {
    findMostRecentEvent,
    endEventAndCreateOne,
    updateLastMeasurementDate
  }
}
