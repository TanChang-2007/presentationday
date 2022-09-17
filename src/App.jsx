import { useState } from 'react'
import moment, { now } from 'moment';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { Icon } from '@iconify/react';
import 'animate.css';


function Home() {
  return (
    <div className="flex bg-gradient-to-r from-[#F9E7FE] to-[#DAFCFC]">
      <div className='absolute text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl m-7 select-none'>{moment().format('DD MMMM YYYY')}</div>
      <div className='flex flex-col pt-10'>
        <a href='https://www.timeanddate.com/timer/'><span className=' border-b-2 border-black border-dotted flex flex-row align-middle text-5xl absolute m-10 pt-10'>Timer</span></a>
        <a href='https://stopwatch.online-timers.com/online-stopwatch'><span className=' border-b-2 border-black border-dotted flex flex-row align-middle text-5xl absolute m-10 pt-28'>Stopwatch</span></a>
        <a href='https://www.timeanddate.com/worldclock/'><span className=' border-b-2 border-black border-dotted flex flex-row align-middle text-5xl absolute m-10 pt-48'>World Clock</span></a>
      </div>
      <div className='flex flex-1 animate__animated animate__pulse sm:text-3xl md:text-5xl lg:text-\6xl xl:text-7xl 2xl:text-8xl items-center justify-center h-screen select-none font-[DM-Sans]'>
        {moment().format("LT")}
      </div>
      <footer className='bg-black h-24 w-full flex flex-row absolute inset-x-0 bottom-0 overflow-auto gap-5'>
        <div className=' text-white pt-7 pl-10'><a href="https://github.com/TanChang-2007"><Icon icon="akar-icons:github-fill" width="40" height="40" /></a></div>
        <div className='text-white pt-7'><a href='https://www.facebook.com/profile.php?id=100045748002108'><Icon icon="akar-icons:facebook-fill" width="40" height="40" /></a></div>
        <div className='text-green-600 pt-9 bottom-0 right-0  text-xl'> Design and Made by Changgg from MRGA</div>
      </footer>
    </div>
  )
}

function App() { 
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App  