import { useState, useEffect, useRef } from 'react';
export default function App() {
  const [likes, setLikes] = useState(0);
  return (
    <>
    <header className='bg-white p-5 [letter-spacing:3px] flex justify-between'>
      <span className='text-xl m-0'>React</span>
      <div className="flex gap-5 [display:none]">
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
      </div>
    </header>
    </>
  )
}