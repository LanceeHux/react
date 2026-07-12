import React from "react";
export default function App() {
  const name = "Lanx";
  const age = 17;
  const favoriteLanguage = "JavaScript";

  return (
    <>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Favorite Language: {favoriteLanguage}</p>
      <p>{25 * 4}</p>
    </>
  );
}