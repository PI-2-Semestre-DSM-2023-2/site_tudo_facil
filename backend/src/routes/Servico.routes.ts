import { Router } from "express";

import ServicoController from "../controllers/ServicoController";

const servicoRouter = Router();

const servicoController = new ServicoController();

servicoRouter.post("/", servicoController.create);

servicoRouter.get("/", servicoController.findAll);

servicoRouter.get("/:id", servicoController.findOne);

servicoRouter.put("/", servicoController.update);

servicoRouter.delete("/:id", servicoController.delete);

export default servicoRouter;
