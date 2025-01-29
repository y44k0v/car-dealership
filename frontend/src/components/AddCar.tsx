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
      <div className="form-group">
      <label htmlFor="brand">Brand:  </label>
      <input
        type="text"
        placeholder=" Honda"
        value={car.brand}
        onChange={(e) => setCar({ ...car, brand: e.target.value })}
      />
      </div>
      <div className="form-group">
      <label htmlFor="model">Model: </label>
      <input
        type="text"
        placeholder=" Civic"
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />
      </div>
      <div className="form-group">
      <label htmlFor="year">Year:     </label>
      <input
        type="number"
        placeholder="2025"
        value={car.year !== 0 ? car.year : 2025}
        onChange={(e) => setCar({ ...car, year: +e.target.value })}
      />
      </div>
      <div className="form-group">
      <label htmlFor="price">Price:    </label>
      <input
        type="number"
        placeholder="3500.99"
        value={car.price !== 0 ? car.price : 35000.55}
        onChange={(e) => setCar({ ...car, price: +e.target.value })}
      />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
