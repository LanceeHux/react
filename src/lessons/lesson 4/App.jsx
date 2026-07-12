import { useState } from "react";

export default function App() {
  const [likes, setLikes] = useState(17);

  return (
    <>
      <h1>Likes {likes}</h1>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>

      <button
        onClick={() => {
          if (likes === 0) return;
          setLikes(likes - 1);
        }}
      >
        Dislike
      </button>
    </>
  );
}