import { useState } from "react";

export default function App() {
  const [inventory, setInventory] = useState([]);

  return (
    <div>
      <h1>Your Inventory:</h1>

      {inventory.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button
        onClick={() =>
          setInventory([...inventory, "Wooden Sword"])
        }
      >
        Add Sword
      </button>
    </div>
  );
}