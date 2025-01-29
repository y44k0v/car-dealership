import { Request, Response } from "express";
import { getDb } from "../database/database";

export const getCars = async (req: Request, res: Response) => {
    const db = getDb();
    const cars = await db.all("SELECT * FROM cars");
    res.json(cars);
};

export const getCarById = async (req: Request, res: Response) => {
    const db = getDb();
    const car = await db.get("SELECT * FROM cars WHERE id = ?", req.params.id);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
};

export const createCar = async (req: Request, res: Response) => {
    const db = getDb();
    const { brand, model, year, price } = req.body;
    const id = Date.now().toString();
    await db.run(
        "INSERT INTO cars (id, brand, model, year, price) VALUES (?, ?, ?, ?, ?)",
        [id, brand, model, year, price]
    );
    res.status(201).json({ id, brand, model, year, price });
};

export const updateCar = async (req: Request, res: Response) => {
    const db = getDb();
    const { brand, model, year, price } = req.body;
    await db.run(
        "UPDATE cars SET brand = ?, model = ?, year = ?, price = ? WHERE id = ?",
        [brand, model, year, price, req.params.id]
    );
    res.json({ id: req.params.id, brand, model, year, price });
};

export const deleteCar = async (req: Request, res: Response) => {
    const db = getDb();
    await db.run("DELETE FROM cars WHERE id = ?", req.params.id);
    res.status(204).send();
};