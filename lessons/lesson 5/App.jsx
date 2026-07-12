import { useState } from "react";

export default function App() {
  const [likes, setLikes] = useState(5);

  return (
    <>
      <h1
        style={{
          color:
            likes === 0
              ? "red"
              : likes <= 9
              ? "orange"
              : "green",
        }}
      >
        {likes}
      </h1>

      {likes >= 10 ? <p>Popular!</p> : <p>New Post</p>}

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>

      <button
        onClick={() =>
          setLikes((prev) => Math.max(0, prev - 1))
        }
      >
        Dislike
      </button>
    </>
  );
}