import React from "react";

export default function App() {
  const inventory = [
    {
      id: 1,
      name: "Wooden Sword",
      rarity: "Common"
    },
    {
      id: 2,
      name: "Iron Shield",
      rarity: "Rare"
    },
    {
      id: 3,
      name: "Health Potion",
      rarity: "Epic"
    }
  ];

  const style = {
    border: "1px solid green",
    margin: "5px",
    padding: "10px"
  };

  return (
    <>
      {inventory.map(item => (
        <div key={item.id} style={style}>
          <h3>{item.name}</h3>
          <p>{item.rarity}</p>
        </div>
      ))}
    </>
  );
}