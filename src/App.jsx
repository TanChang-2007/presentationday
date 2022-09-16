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
      <Link to="/timer" className=' border-b-2 border-black border-dotted flex flex-row align-middle text-5xl absolute m-10 pt-40'><Icon icon="fluent:timer-28-regular" width="50" height="50" /><span className='pl-3'>Timer</span></Link>
      <div className='flex flex-1 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl items-center justify-center h-screen select-none font-[DM-Sans]'>
        {moment().format("LTS")}
      </div>
    </div>
  )
}

function Timer() {
  return(
    <div className='flex bg-gradient-to-r from-[#F9E7FE] to-[#DAFCFC] h-screen w-full'>
      <div className=''>
        
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App  