import { useState } from "react";
import { Car } from "../types/Car";
import { createCar } from "../services/carService";

const AddCar = ({ onCarAdded }: { onCarAdded: () => void }) => {
  const [car, setCar] = useState<Omit<Car, "id">>({
    brand: "",
    model: "",
    year: 0,
    price: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCar(car);
    onCarAdded();
    setCar({ brand: "", model: "", year: 0, price: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Car</h2>
      <input
        type="text"
        placeholder="Brand"
        value={car.brand}
        onChange={(e) => setCar({ ...car, brand: e.target.value })}
      />
      <input
        type="text"
        placeholder="Model"
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />
      <input
        type="number"
        placeholder="Year"
        value={car.year}
        onChange={(e) => setCar({ ...car, year: +e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={car.price}
        onChange={(e) => setCar({ ...car, price: +e.target.value })}
      />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
