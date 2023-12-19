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

// Configure the body-parser
app.use(bodyParser.json());


app.use(cors());
// Conection with database
connectionDB();
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(201)
    .json({ message: "Abner", warning: "Read The Documentation to Use Api" });
});
app.use("/user", userRoutes);

app.use("/post", postRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
