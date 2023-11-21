// const mongoose = require("mongoose");

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/choice-shopping",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// module.exports = mongoose.connection;
const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace <password> with the password for the Moji-admin user. Encode if necessary.
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas!");

    // Here you can add the operations you want to perform on the database.
  } catch (err) {
    console.error("Connection to MongoDB Atlas failed!", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

module.exports = client; // Only if you need to export the client for use elsewhere
