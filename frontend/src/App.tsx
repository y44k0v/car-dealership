import { useState } from "react";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleCarAdded = () => {
    setRefresh(!refresh); // Toggle refresh to re-fetch cars
  };

  return (
    <div>
      <h1>Car Dealership</h1>
      <AddCar onCarAdded={handleCarAdded} />
      <CarList />
    </div>
  );
}

export default App;