const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

async function connectionDB () {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = { connectionDB };
