const { Router } = require("express");

const routes = new Router();

const users = require("./data/usersData");

routes.get("/users", (req, res) => {
  return res.json(users);
});

module.exports = routes;
