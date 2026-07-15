import { useState } from 'react';

export default function App() {
  const [ likes, setLikes ] = useState(0);
  const [nav, setNav] = useState(false);

  return (
    <>
    <header className='bg-white flex justify-between p-5 shadow-xl'>
      <p className='text-2xl md:p-3'>React</p>
      <div className=" hidden md:flex flex-row gap-3">
        <button className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#d5d5d5]'>Home</button>
        <button className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#d5d5d5]'>About</button>
        <button className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#d5d5d5]'>Projects</button>
      </div>
      <button
      className='md:hidden hover:bg-[#d5d5d5] p-1 rounded-xl duration-200 ease-in-out'
      onClick={() => setNav(!nav)}
      >≡</button>
    </header>
    <div className={`md:hidden ${nav ? 'flex' : "hidden"} absolute w-full justify-between duration-300 ease-in-out p-3 bg-[#d5d5d5] shadow-md`}>
        <button className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#b4b1b1]'>Home</button>
        <button className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#b4b1b1]'>About</button>
        <button className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#b4b1b1]'>Projects</button>
      </div>
      <main className='flex justify-center items-center min-h-screen'>
        <section className=' min-h-screen p-5 flex flex-col md:flex-row gap-5 w-full [background:rgba(0,0,0,0.473)]'>
          
          <div className="flex flex-col gap-3 justify-center mt-10">
            <h1 className='text-3xl md:text-8xl'>My React Site</h1>
          <p>Hello this is my first React Site</p>
          <div className='flex gap-4 justify-between p-3 rounded-md'>
            <button className='hover:bg-[lightblue] bg-[#ffcd00] duration-300 ease-in-out rounded-md p-[5px] w-[50%]'>Facebook</button>
            <button className='hover:bg-[#d5d5d5] bg-[#1c1c1c] hover:text-black text-white duration-300 ease-in-out rounded-md p-[5px] w-[50%]'>Github</button>
          </div>
            </div>
          <div className='bg-black items-center flex'>
            <img className='r' src="https://lanceehux.github.io/images/profile.jpg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}