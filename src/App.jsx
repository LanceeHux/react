import { useState, useEffect, useRef } from 'react';
export default function App() {
  const [likes, setLikes] = useState(0);
  return (
    <>
    <header className="shadow-2xl w-full absolute top-0 left-0 flex justify-between bg-[#1c1c1c] text-white p-[30px] [letter-spacing:3px]">
      <h1 className="text-2xl">My React Site: @Lee</h1>
      <div className="flex gap-10">
        <a href="Home" className="hover:bg-black duration-600 p-[10px] rounded-lg">Home</a>
        <a href="About" className="hover:bg-black duration-600 p-[10px] rounded-lg">About</a>
        <a href="Projects" className="hover:bg-black duration-600 p-[10px] rounded-lg">Projects</a>
      </div>
    </header>
    <main className="w-full bg-black min-h-screen text-white">
      <section className="min-h-screen w-full flex flex-col justify-center items-center gap-10 bg-[radial-gradient(circle_at_top_left,_#1c1c1c,_transparent_70%)] md:flex-row">
        <div className="flex flex-col gap-5 md:flex-row md:gap-5">
          <h1 className='text-8xl'>My React Site!</h1>
          <p className=''>This is my first React Site! </p>
          <div className="flex gap-[60%]">
            <button className='[padding:5px_15px_5px_15px] rounded-xl [letter-spacing:3px] bg-[#ffcd00] text-black hover:bg-white text-black duration-300'>Facebook</button>
            <button className='[padding:5px_15px_5px_15px] rounded-xl [letter-spacing:3px] bg-[#ffcd00] text-black hover:bg-white text-black duration-300'>Github</button>
          </div>
        </div>
        <div className="p-[30px] bg-[#1c1c1c] rounded-3xl [margin-top:7%]">
          <img src="https://lanceehux.github.io/images/profile.jpg" className="w-[400px] h-[500px] rounded-3xl [border:2px_solid_white]"/>
          <p className="px-4 py-2 mt-4 text-gray-300 bg-white/5 border border-white/10 rounded-lg font-medium tracking-wide">
          Likes: <span className="text-white font-bold">Likes: {likes}</span>
          </p>
          <div className="flex flex-row justify-between p-[5px] mt-[10px] [letter-spacing:3px]">
            <button onClick={() => setLikes(likes + 1)} className='[padding:5px_15px_5px_15px] rounded-xl [letter-spacing:3px] bg-[#ffcd00] w-[40%] text-black hover:bg-[lightgreen] text-black duration-300'>Like</button>
            <button className='[padding:5px_15px_5px_15px] rounded-xl [letter-spacing:3px] bg-[red] text-black hover:bg-[pink] text-black duration-300'>Dislike</button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}