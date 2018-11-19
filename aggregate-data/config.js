const isDev = !!process.env.DEV

module.exports = {
  PORT: process.env.PORT,
  LOG_DIRECTORY: process.env.LOG_DIRECTORY,

  KAFKA_HOST: process.env.KAFKA_HOST,
  KAFKA_PORT: process.env.KAFKA_PORT,
  KAFKA_TOPIC: process.env.KAFKA_TOPIC,
  KAFKA_GROUP: process.env.KAFKA_GROUP,

  MONGODB_URI: process.env.MONGODB_URI,

  INFLUX_DB_URL: isDev ? process.env.INFLUX_DB_URL_DEV : process.env.INFLUX_DB_URL,
  INFLUX_DB_DATABASE: isDev ? process.env.INFLUX_DB_DATABASE_DEV : process.env.INFLUX_DB_DATABASE,
  INFLUX_DB_HOST: isDev ? process.env.INFLUX_DB_HOST_DEV : process.env.INFLUX_DB_HOST,
  INFLUX_DB_PORT: isDev ? process.env.INFLUX_DB_PORT_DEV : process.env.INFLUX_DB_PORT,
  INFLUX_DB_USERNAME: isDev ? process.env.INFLUX_DB_USERNAME_DEV : process.env.INFLUX_DB_USERNAME,
  INFLUX_DB_PASSWORD: isDev ? process.env.INFLUX_DB_PASSWORD_DEV : process.env.INFLUX_DB_PASSWORD,
  INFLUX_DB_PROTOCOL: isDev ? process.env.INFLUX_DB_PROTOCOL_DEV : process.env.INFLUX_DB_PROTOCOL
}