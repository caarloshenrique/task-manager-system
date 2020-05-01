const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.express.use(cors());
    this.isDev = process.env.NODE_ENV !== "production";

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect("mongodb://localhost:27017/project-manager-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
