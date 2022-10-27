const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
dotenv.config({ path: "./config.env" });


const mountRoutes = require('./routes');
mountRoutes(app)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT}`);
});
