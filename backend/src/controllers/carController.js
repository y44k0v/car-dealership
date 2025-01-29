"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.createCar = exports.getCarById = exports.getCars = void 0;
let cars = [];
const getCars = (req, res) => {
    res.json(cars);
};
exports.getCars = getCars;
const getCarById = (req, res) => {
    const car = cars.find((c) => c.id === req.params.id);
    if (car) {
        res.json(car);
    }
    else {
        res.status(404).json({ message: "Car not found" });
    }
};
exports.getCarById = getCarById;
const createCar = (req, res) => {
    const newCar = Object.assign({ id: Date.now().toString() }, req.body);
    cars.push(newCar);
    res.status(201).json(newCar);
};
exports.createCar = createCar;
const updateCar = (req, res) => {
    const index = cars.findIndex((c) => c.id === req.params.id);
    if (index !== -1) {
        cars[index] = Object.assign(Object.assign({}, cars[index]), req.body);
        res.json(cars[index]);
    }
    else {
        res.status(404).json({ message: "Car not found" });
    }
};
exports.updateCar = updateCar;
const deleteCar = (req, res) => {
    cars = cars.filter((c) => c.id !== req.params.id);
    res.status(204).send();
};
exports.deleteCar = deleteCar;
