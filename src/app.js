const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { connectionDB } = require("./config/Connection");

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Configurar o body-parser
app.use(bodyParser.json());


app.use(cors());
// Conectar ao banco de dados MongoDB
connectionDB();
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(201)
    .json({ message: "Abner", warning: "read the documentation to use Api" });
});
app.use("/user", userRoutes);

app.use("/post", postRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
