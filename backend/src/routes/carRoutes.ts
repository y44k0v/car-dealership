import express from "express";
import {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar,
} from "../controllers/carController";

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/", createCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

export default router;