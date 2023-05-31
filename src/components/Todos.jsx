import React, { useState } from 'react'
import CheckBox from './CheckBox'
import cross from '../assets/icon-cross.svg'

function Todo({text, id, isDone, deleteTodo, updateTodo}) {
  const [isCompleted, setIsCompleted] = useState(isDone)
  return (
    <div className="flex lg:px-8 px-5 py-4 items-center justify-between border-b border-text-footer-light dark:border-text-footer-dark">
      <div className="flex items-center gap-4">
        <CheckBox id={id} updateTodo={updateTodo} isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
        <p className={`text-sm lg:text-2xl ${isCompleted ? "line-through text-text-footer-light dark:text-text-footer-dark":"text-text-todos-light dark:text-primary-dark"}`}>{text}</p>
      </div>
      <img onClick={() => deleteTodo(id)} className='cursor-pointer' src={cross} alt="cross" />
    </div>
  )
}

export default Todo
