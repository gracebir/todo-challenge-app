import React, { useEffect, useState } from 'react'
import Moon from './assets/icon-moon.svg'
import Sun from './assets/icon-sun.svg'
import TodoForm from './components/TodoForm'
import Todo from './components/Todos'

function App() {
  const [theme, setTheme] = useState("dark")
  const [filter, setFilter] = useState("all")
  const [todos, setTodos] = useState([
    {
      id: 1,
      isDone: false,
      text: "Complete online Javascript course"
    },
    {
      id: 2,
      isDone: false,
      text: "Jog around the park 3x"
    },
    {
      id: 3,
      isDone: false,
      text: "Read for 1 hour"
    },
    {
      id: 4,
      isDone: false,
      text: "Pick up groceries"
    },
])

  // delete todos
  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  // clear completed todos
  const clearCompleted = () => setTodos([...todos.filter((todo) => todo.isDone !== true)])

  // handle theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  // handle filter
  const handleFilter = (type) => {
    setFilter(type);
  };


  // filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.isDone;
    } else if (filter === "active") {
      return !todo.isDone;
    } else {
      return true;
    }
  });


  // theme toggle
  const toggle = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("dark")
    }
  }

  // update isCompleted
  const updateTodo = (id) => {
    const update = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
    setTodos([...update])
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
              <TodoForm todos={todos} setTodos={setTodos} />
              <div className='h-[62vh] flex flex-col overflow-y-auto scroll-smooth scroll-none'>
              {todos.length !== 0 && (
                <div className="rounded-md bg-bg-input-light dark:bg-bg-input-dark flex flex-col">
                  {filteredTodos.map((todo, i) => (
                    <Todo key={i} updateTodo={updateTodo} isDone={todo.isDone} text={todo.text} deleteTodo={deleteTodo} id={todo.id} />
                  ))}
                  <div className='lg:px-8 px-5 py-4 flex justify-between items-center'>
                    <p className='text-text-footer-dark'> {todos.length} {todos.length > 1 ? "items" : "item"} left</p>
                    <div className='lg:flex hidden justify-center gap-4 rounded-md bg-bg-input-light dark:bg-bg-input-dark'>
                      <p onClick={() => handleFilter("all")} className='cursor-pointer hover:text-text-todos-light dark:hover:text-text-todos-dark duration-300 text-active-color'>All</p>
                      <p onClick={() => handleFilter("active")} className="text-text-footer-dark cursor-pointer hover:text-text-todos-light dark:hover:text-text-todos-dark duration-300">Active</p>
                      <p onClick={() => handleFilter("completed")} className='text-text-footer-dark cursor-pointer hover:text-text-todos-light dark:hover:text-text-todos-dark duration-300'>Completed</p>
                    </div>
                    <p onClick={() => clearCompleted()} className="text-text-footer-dark cursor-pointer hover:text-text-todos-light dark:hover:text-text-todos-dark duration-300">Clear completed</p>
                  </div>
                </div>
               
              )}
              

              {todos.length !== 0 && (
                <div className='flex lg:hidden justify-center gap-4 rounded-md bg-bg-input-light dark:bg-bg-input-dark py-4'>
                  <p onClick={() => handleFilter("all")} className='cursor-pointer hover:text-text-todos-light dark:hover:text-text-todos-dark duration-300 text-active-color'>All</p>
                  <p onClick={() => handleFilter("active")} className="text-text-footer-dark cursor-pointer hover:text-text-todos-light dark:hover:text-text-todos-dark duration-300">Active</p>
                  <p onClick={() => handleFilter("completed")} className='text-text-footer-dark cursor-pointer hover:text-text-todos-light dark:hover:text-text-todos-dark duration-300'>Completed</p>
                </div>
              )}
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

