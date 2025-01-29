import axios from "axios";
import { Car } from "../types/Car";

const API_URL = "http://localhost:5000/api/cars";

export const getCars = async (): Promise<Car[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createCar = async (car: Omit<Car, "id">): Promise<Car> => {
    const response = await axios.post(API_URL, car);
    return response.data;
};

export const updateCar = async (car: Car): Promise<Car> => {
    const response = await axios.put(`${API_URL}/${car.id}`, car);
    return response.data;
};

export const deleteCar = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};