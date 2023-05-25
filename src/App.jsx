import React, { useState } from 'react'
import Moon from './assets/icon-moon.svg'
import Sun from './assets/icon-sun.svg'

/**
 * background image
 * desktop lightmode: https://res.cloudinary.com/dnzidlufh/image/upload/v1684996733/bg-desktop-light_j9xyeb.jpg
 * desktop darkmode: https://res.cloudinary.com/dnzidlufh/image/upload/v1684996733/bg-desktop-dark_crnpoj.jpg
 * mobile darkmode: https://res.cloudinary.com/dnzidlufh/image/upload/v1684996733/bg-mobile-dark_pi6pt4.jpg
 * mobile lightmode: https://res.cloudinary.com/dnzidlufh/image/upload/v1684996733/bg-mobile-light_ky85gd.jpg
*/


function App() {
  const [theme, setTheme] = useState("dark")
  const toggle = () => {
    if(theme === "dark"){
      setTheme("light")
    } else if(theme==="light"){
      setTheme("dark")
    }
  }
  return (
    <div className="font-josefin-sans bg-image-desktop bg-no-repeat bg-cover h-[35vh] w-full">
      <div className='max-w-2xl h-screen top-50 mx-auto  flex flex-col items-center justify-center'>
        <div className='w-full h-[80vh]'>
          <div className="flex justify-between items-center">
            <h1 className="text-white text-4xl uppercase font-bold tracking-[.2em]">todo</h1>
            <img onClick={toggle} className="cursor-pointer" src={theme==="dark" ? Sun: Moon } alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

