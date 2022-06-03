const express = require("express");
const router = require("./router");
const cors = require("cors");

const server = express();
const port = process.env.PORT ?? 3002;

server.use(cors());
server.use(router);

server.listen(port, () => {
  console.log(`Serveur lancé à l'adresse http://localhost:${port}`);
});
