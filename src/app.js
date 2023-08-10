const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
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

// Rotas de autenticação // mudar para rota users,pegar mesmo num papel e desenhar as rotas
app.use("/auth", authRoutes);

// Rotas de posts
app.use("/posts", postRoutes)

// Porta do servidor
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
