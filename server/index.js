const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const card = require("./routes/card");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/cards", card);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
