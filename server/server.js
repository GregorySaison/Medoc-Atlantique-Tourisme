const express = require("express");
const router = require("./router");

const server = express();
const port = process.env.PORT ?? 3000;

server.use(router);

server.listen(port, () => {
  console.log(`Serveur lancé à l'adresse http://localhost:${port}`);
});
