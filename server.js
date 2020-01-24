const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const characters = require("./characters/character-router")
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/character', characters);

  server.get("/", (req, res) => {
    res.send("server up and running");
  });


module.exports = server;
