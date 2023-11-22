import { Router } from "express";

import PlanoController from "../controllers/PlanoController";

const planoRouter = Router();

const planoController = new PlanoController();

planoRouter.post("/", planoController.create);

planoRouter.get("/", planoController.findAll);

planoRouter.get("/niveis", planoController.findAllNiveis);

planoRouter.get("/:id", planoController.findOne);

planoRouter.put("/", planoController.update);

planoRouter.delete("/:id", planoController.delete);

export default planoRouter;
