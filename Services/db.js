const db = require("mongoose");

db.Promise = global.Promise;
const connect = async (url) => {
  await db.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  console.log("[db] Concetado con exito");
};

module.exports = connect;
//mongodb+srv://dbuser:D3s4rr0ll0@cluster0-w7ttm.mongodb.net/test
