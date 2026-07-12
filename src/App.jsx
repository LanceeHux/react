import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [ likes, setLikes ] = useState(0);
  const paragraphRef = useRef(null);

  return (
    <>
    <p ref={paragraphRef}>It's 2019</p>
    <button onClick={() => paragraphRef.current.innerText = " Its 2026"}>Update Year</button>
    </>
  )
}