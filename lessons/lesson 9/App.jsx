import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const [inventory, setInventory] = useState([
    { id: 1, name: "Wooden Sword" },
    { id: 2, name: "Iron Sword" },
    { id: 3, name: "Diamond Sword" }
  ]);

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() =>
          setInventory(items =>
            items.filter(
              item => item.id !== Number(value)
            )
          )
        }
      >
        Remove Item
      </button>

      {inventory.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
}