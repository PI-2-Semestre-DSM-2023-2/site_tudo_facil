import { Router } from "express";

import AssinaturaController from "../controllers/AssinaturaController";

const assinaturaRouter = Router();

const assinaturaController = new AssinaturaController();

assinaturaRouter.post("/", assinaturaController.create);

assinaturaRouter.get("/", assinaturaController.findAll);

assinaturaRouter.get("/:id", assinaturaController.findOne);

assinaturaRouter.get("/usuario/:id", assinaturaController.findByIdUsuario);

assinaturaRouter.put("/", assinaturaController.update);

assinaturaRouter.delete("/:id", assinaturaController.delete);

export default assinaturaRouter;
