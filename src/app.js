const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes")
// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());

// Rotas de user 
app.use("/user", userRoutes);

// Rotas de posts
app.use("/post", postRoutes)

// Porta do servidor
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
