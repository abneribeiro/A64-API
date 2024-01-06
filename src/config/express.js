const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("../routes/userRoutes");
const postRoutes = require("../routes/postRoutes");

module.exports = () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.json());
    app.use("/user", userRoutes);
    app.use("/post", postRoutes);

    app.get("/", (req, res) => {
        res.status(201).json({ message: "Abner", warning: "Read The Documentation to Use Api" });
    });

    return app;
};
