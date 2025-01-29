import express from "express";
import cors from "cors";
// npm i --save-dev @types/cors
import carRoutes from "./routes/carRoutes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/cars", carRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});