import { Router } from "express";

import todoController from "../controller/todo.js";

const todoRouter = new Router();

todoRouter.post("/todos", todoController.create);
todoRouter.get("/todo/:id", todoController.readSindle);
todoRouter.get("/todos", todoController.readAll);
todoRouter.put("/todo/:id", todoController.update);
todoRouter.get("/delete-todo/:id", todoController.delete);

export default todoRouter;