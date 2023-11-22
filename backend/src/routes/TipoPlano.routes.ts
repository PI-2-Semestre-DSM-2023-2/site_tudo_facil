import { Router } from "express";

import TipoPlanoController from "../controllers/TipoPlanoController";

const cartaoCreditoRouter = Router();

const cartaoCreditoController = new TipoPlanoController();

cartaoCreditoRouter.post("/", cartaoCreditoController.create);

cartaoCreditoRouter.get("/", cartaoCreditoController.findAll);

cartaoCreditoRouter.get("/:id", cartaoCreditoController.findOne);

cartaoCreditoRouter.put("/", cartaoCreditoController.update);

cartaoCreditoRouter.delete("/:id", cartaoCreditoController.delete);

export default cartaoCreditoRouter;
