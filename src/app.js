const dotenv = require("dotenv");
const { connectionDB } = require("./config/Connection");
const createApp = require("./config/express");

dotenv.config();

const app = createApp();

connectionDB();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));