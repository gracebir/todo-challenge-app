import React, { useEffect, useState } from 'react'
import Moon from './assets/icon-moon.svg'
import Sun from './assets/icon-sun.svg'
import TodoForm from './components/TodoForm'

function App() {
  const [theme, setTheme] = useState("dark")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggle = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("dark")
    }
  }

  return (
    <div className="bg-bg-light dark:bg-bg-dark h-screen">
      <div className="font-josefin-sans lg:bg-desk-bg-light bg-mob-bg-light dark:bg-mob-bg-dark lg:dark:bg-desk-bg-dark bg-no-repeat bg-cover h-[35vh] w-full px-4 lg:px-0">
        <div className='max-w-2xl h-screen top-50 mx-auto  flex flex-col items-center justify-center'>
          <div className='w-full h-[80vh] flex flex-col gap-12'>
            <div className="flex justify-between items-center">
              <h1 className="text-white text-4xl uppercase font-bold tracking-[.2em]">todo</h1>
              <img onClick={toggle} className="cursor-pointer" src={theme === "dark" ? Sun : Moon} alt="" />
            </div>
            <div className='flex flex-col gap-6'>
              <TodoForm/>
              <div>

              </div>
            </div>
          </div>
          <p className='text-text-footer-dark'>Drag and Drop to recorder list</p>
        </div>
      </div>
    </div>
  )
}

export default App

