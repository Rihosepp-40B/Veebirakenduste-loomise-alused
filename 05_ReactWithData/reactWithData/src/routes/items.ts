import { Router } from "express";
import * as cotroller from "../controllers/itemsController";

const router = Router();
// Router käsitleb navigatsiooni erinevate vaadete vahel

router.get("/", cotroller.getItems);
router.post("/", cotroller.createItem);
router.delete("/:id", cotroller.removeItem);

export default router