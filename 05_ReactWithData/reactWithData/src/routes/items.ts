import { Router } from "express";
import * as controller from "../controllers/itemsController.ts";

const router = Router();
// Router käsitleb navigatsiooni erinevate vaadete vahel

router.get("/", controller.getItems);
router.post("/", controller.createItem);
router.delete("/:id", controller.removeItem);

export default router