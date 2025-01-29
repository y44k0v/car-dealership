import { useEffect, useState } from "react";
import { Car } from "../types/Car";
import { getCars, deleteCar } from "../services/carService";

const CarList = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const data = await getCars();
    setCars(data);
  };

  const handleDelete = async (id: string) => {
    await deleteCar(id);
    fetchCars();
  };

  return (
    <div>
      <h1>Car Inventory</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand} {car.model} ({car.year}) - ${car.price}
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;