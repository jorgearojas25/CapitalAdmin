const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb+srv://dbuser:D3s4rr0ll0@cluster0-w7ttm.mongodb.net/test",
  host: process.env.HOST || "http://localhost",
  port: process.env.PORT || 3000,
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  filesRoute: process.env.FILES_ROUTE || "/files"
};

module.exports = config;
