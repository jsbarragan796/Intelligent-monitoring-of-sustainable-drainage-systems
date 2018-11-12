
module.exports = {
  PORT: process.env.PORT,
  LOG_DIRECTORY: process.env.LOG_DIRECTORY,

  KAFKA_HOST: process.env.KAFKA_HOST,
  KAFKA_PORT: process.env.KAFKA_PORT,
  KAFKA_GROUP: process.env.KAFKA_GROUP,
  KAFKA_TOPIC_CONSUMER: process.env.KAFKA_TOPIC_CONSUMER,
  KAFKA_TOPIC_PRODUCER_CLOSING_EVENT: process.env.KAFKA_TOPIC_PRODUCER_CLOSING_EVENT,
  KAFKA_TOPIC_PRODUCER_NOTIFICATION: process.env.KAFKA_TOPIC_PRODUCER_NOTIFICATION,

  NOTIFICATION_STARTED_RAINING: '0',

  MONGODB_URI: process.env.MONGODB_URI
}
