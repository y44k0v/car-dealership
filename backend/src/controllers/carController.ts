import { Request, Response } from "express";
import { Car } from "../models/Car";

let cars: Car[] = [];

export const getCars = (req: Request, res: Response) => {
    res.json(cars);
};

export const getCarById = (req: Request, res: Response) => {
    const car = cars.find((c) => c.id === req.params.id);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
};

export const createCar = (req: Request, res: Response) => {
    const newCar: Car = {
        id: Date.now().toString(),
        ...req.body,
    };
    cars.push(newCar);
    res.status(201).json(newCar);
};

export const updateCar = (req: Request, res: Response) => {
    const index = cars.findIndex((c) => c.id === req.params.id);
    if (index !== -1) {
        cars[index] = { ...cars[index], ...req.body };
        res.json(cars[index]);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
};

export const deleteCar = (req: Request, res: Response) => {
    cars = cars.filter((c) => c.id !== req.params.id);
    res.status(204).send();
};