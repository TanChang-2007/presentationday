import { useState } from 'react'
import moment, { now } from 'moment';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { Icon } from '@iconify/react';

function Home() {
  return (
    <div className="flex bg-gradient-to-r from-[#F9E7FE] to-[#DAFCFC]">
      <div className='absolute text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl m-7 select-none'>{moment().format('DD MMMM YYYY')}</div>
      <div className='flex flex-col'>
        <a href='https://www.timeanddate.com/timer/'><span className=' border-b-2 border-black border-dotted flex flex-row align-middle text-5xl absolute m-10 pt-10'>Timer</span></a>
        <a href='https://stopwatch.online-timers.com/online-stopwatch'><span className=' border-b-2 border-black border-dotted flex flex-row align-middle text-5xl absolute m-10 pt-28'>Stopwatch</span></a>
        <a href='https://www.timeanddate.com/worldclock/'><span className=' border-b-2 border-black border-dotted flex flex-row align-middle text-5xl absolute m-10 pt-48'>World Clock</span></a>
      </div>
      <div className='flex flex-1 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl items-center justify-center h-screen select-none font-[DM-Sans]'>
        {moment().format("LT")}
      </div>
    </div>
  )
}

function Ecommerce(){
  return(
    <div></div>
  )
}

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="ecommerce" element={<Eccormerce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App  