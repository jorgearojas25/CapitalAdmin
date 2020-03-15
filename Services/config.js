require('dotenv').config();

const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb+srv://dbuser:D3s4rr0ll0@cluster0-w7ttm.mongodb.net/test",
  host: process.env.HOST,
  port: process.env.PORT,
  publicRoute: process.env.PUBLIC_ROUTE,
  filesRoute: process.env.FILES_ROUTE,
  dbUser:process.env.DB_USER,
  dbPassword:process.env.DB_PASSWORD,
  dbHost:process.env.DB_HOST,
  dbName:process.env.DB_NAME
};

module.exports = config;
