"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carController_1 = require("../controllers/carController");
const router = express_1.default.Router();
router.get("/", carController_1.getCars);
router.get("/:id", carController_1.getCarById);
router.post("/", carController_1.createCar);
router.put("/:id", carController_1.updateCar);
router.delete("/:id", carController_1.deleteCar);
exports.default = router;
