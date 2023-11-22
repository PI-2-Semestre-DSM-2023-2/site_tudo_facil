import { Router } from "express";

import CartaoCreditoController from "../controllers/CartaoCreditoController";

const cartaoCreditoRouter = Router();

const cartaoCreditoController = new CartaoCreditoController();

cartaoCreditoRouter.post("/", cartaoCreditoController.create);

cartaoCreditoRouter.get("/", cartaoCreditoController.findAll);

cartaoCreditoRouter.get("/:id", cartaoCreditoController.findOne);

cartaoCreditoRouter.put("/", cartaoCreditoController.update);

cartaoCreditoRouter.delete("/:id", cartaoCreditoController.delete);

export default cartaoCreditoRouter;
