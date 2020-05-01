const express = require("express");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");
const authorizationMiddleware = require("./app/middlewares/authorization");

const controllers = require("./app/controllers");

routes.post("/users", controllers.UserController.store);
routes.post("/sessions", controllers.SessionController.store);

routes.use(authMiddleware);

routes.get("/tasks", controllers.TaskController.index);
routes.get("/task/:id", controllers.TaskController.show);
routes.post("/task", controllers.TaskController.store);
routes.put("/task/:id", controllers.TaskController.update);
routes.delete("/task/:id", controllers.TaskController.destroy);

module.exports = routes;
