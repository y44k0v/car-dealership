"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// npm i --save-dev @types/cors
const carRoutes_1 = __importDefault(require("./routes/carRoutes"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/cars", carRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
