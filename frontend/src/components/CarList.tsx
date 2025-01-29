import { useEffect, useState } from "react";
import { Car } from "../types/Car";
import { getCars, deleteCar, updateCar } from "../services/carService";

const CarList = ({ refresh }: { refresh: boolean }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [editingCar, setEditingCar] = useState<Car | null>(null);

  useEffect(() => {
    fetchCars();
  }, [refresh]);

  const fetchCars = async () => {
    const data = await getCars();
    setCars(data);
  };

  const handleDelete = async (id: string) => {
    await deleteCar(id);
    fetchCars();
  };

  const handleUpdateClick = (car: Car) => {
    setEditingCar(car); // Open form with car details
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCar) return;

    await updateCar(editingCar);
    setEditingCar(null); // Close form
    fetchCars(); // Refresh list
  };

  return (
    <div>
      <h1>Car Inventory</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand} {car.model} ({car.year}) - ${car.price}
            <button className="btn-update" onClick={() => handleDelete(car.id)}>Delete</button>
            <button className="btn-update" onClick={() => handleUpdateClick(car)}>Update</button>
          </li>
        ))}
      </ul>
      {/* Show Update Form when a car is being edited */}
      {editingCar && (
        <form onSubmit={handleUpdateSubmit}>
          <h2>Update Car</h2>
          <label>Brand:</label>
          <input
            type="text"
            value={editingCar.brand}
            onChange={(e) => setEditingCar({ ...editingCar, brand: e.target.value })}
          />

          <label>Model:</label>
          <input
            type="text"
            value={editingCar.model}
            onChange={(e) => setEditingCar({ ...editingCar, model: e.target.value })}
          />

          <label>Year:</label>
          <input
            type="number"
            value={editingCar.year}
            onChange={(e) => setEditingCar({ ...editingCar, year: +e.target.value })}
          />

          <label>Price:</label>
          <input
            type="number"
            value={editingCar.price}
            onChange={(e) => setEditingCar({ ...editingCar, price: +e.target.value })}
          />

          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setEditingCar(null)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default CarList;