import { useState, useEffect } from "react";

export default function App() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    alert("likes changed");
  }, [likes]);

  return (
    <>
      <h1>Likes: {likes}</h1>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>

      <button onClick={() => setLikes(likes - 1)}>
        Dislike
      </button>
    </>
  );
}