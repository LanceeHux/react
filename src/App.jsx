import { useState } from 'react';

export default function App() {
  const [ likes, setLikes ] = useState(0);
  const [nav, setNav] = useState(false);

  return (
    <>
    <header className='bg-white flex justify-between p-5 shadow-xl sticky top-0'>
      <p className='text-2xl md:p-3'>React</p>
      <div className=" hidden md:flex flex-row gap-3">
        <a className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#d5d5d5] active:bg-[#d5d5d5] focus:bg-[#d5d5d5]'>Home</a>
        <a href="#about" className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#d5d5d5] active:bg-[#d5d5d5]'>About</a>
        <a className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#d5d5d5]'>Projects</a>
      </div>
      <button
      className='md:hidden hover:bg-[#d5d5d5] p-1 rounded-xl duration-200 ease-in-out'
      onClick={() => setNav(!nav)}
      >≡</button>
    </header>
    <div className={`md:hidden ${nav ? 'flex' : "hidden"} absolute w-full justify-between duration-300 ease-in-out p-3 bg-[#d5d5d5] shadow-md`}>
        <a className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#b4b1b1]'>Home</a>
        <a href="#about" className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#b4b1b1]'>About</a>
        <a className='p-3 duration-300 ease-in-out rounded-md hover:bg-[#b4b1b1]'>Projects</a>
      </div>
      <main className='flex flex-col justify-center items-center min-h-screen'>
        <section className=' min-h-screen p-5 flex flex-col md:flex-row gap-5 w-full [background:rgba(0,0,0,0.473)] justify-center items-center'>
          
          <div className="flex flex-col gap-3 justify-center mt-10">
            <h1 className='text-3xl md:text-8xl'>My React Site</h1>
          <p>Hello this is my first React Site</p>
          <div className='flex gap-4 justify-between p-3 rounded-md'>
            <button className='hover:bg-[lightblue] bg-[#ffcd00] duration-300 ease-in-out rounded-md p-[5px] w-[50%]'>Facebook</button>
            <button className='hover:bg-[#d5d5d5] bg-[#1c1c1c] hover:text-black text-white duration-300 ease-in-out rounded-md p-[5px] w-[50%]'>Github</button>
          </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <img className='max-w-md rounded-xl' src="https://lanceehux.github.io/images/profile.jpg" alt="" />
              <div className="flex flex-col gap-5">
                <p>Likes: {likes}</p>
                <button onClick={() => setLikes(likes + 1)} className='bg-[#ffcd00] rounded-xl'>Like</button>
              </div>
            </div>
        </section>
        <section id="about" className='w-full min-h-screen flex justify-center items-center'>
          <div id="about-container" className='flex'>
            <div className='bg-[#ffcd00] w-[50%] p-10 [letter-spacing:2px] text-shadow-md flex flex-col gap-3 w-full'>
              <h1 className='text-5xl'>About <strong className='text-white text-shadow-xl'>@Lee?</strong></h1>
              <p>I am a young developer who enjoys building my own useful tools online and projects that serve as my practice before I officially enter IT field. I found programming websites as one of interesting thing a person can do. I found my own freedom here, like, building anything I want such as my own AI, academic online reviewer, to-do lists and such. This portfolio highlights my current active projects and my future projects.</p>
            </div>
            <div id="languages-container" className="w-full bg-[green] flex justify-center items-center flex-col">
              <h1>Programming Languages & Library</h1>
              <div id="languages" className="flex gap-10">
                <div className="flex gap-3 bg-[blue] w-[50%] p-10">
                  <img className='w-[20%] rounded-[100%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuUl2wFQWQIAiiNzQt0Z2WuGncyc7Cb7ySCRD4J7ncg&s=10" alt="" />
                  <div className="flex justify-center items-center">
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="flex gap-3 bg-[blue] w-[50%] p-10">
                  <img className='w-[20%] rounded-[100%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuUl2wFQWQIAiiNzQt0Z2WuGncyc7Cb7ySCRD4J7ncg&s=10" alt="" />
                  <div className="flex justify-center items-center">
                    <p>Javascript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}