import { Router } from "express";

import UsuarioController from "../controllers/UsuarioController";

const usuarioRouter = Router();

const usuarioController = new UsuarioController();

usuarioRouter.post("/", usuarioController.create);

usuarioRouter.get("/", usuarioController.findAll);

usuarioRouter.get("/:id", usuarioController.findOne);

usuarioRouter.post("/login", usuarioController.login);

usuarioRouter.put("/", usuarioController.update);

usuarioRouter.delete("/:id", usuarioController.delete);

export default usuarioRouter;
