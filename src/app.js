const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

// Conectar ao banco de dados MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

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
