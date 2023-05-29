import React, { useState } from 'react'
import CheckBox from './CheckBox'
import cross from '../assets/icon-cross.svg'

function Todo({text, id}) {
  const [isCompleted, setIsCompleted] = useState(false)
  console.log(isCompleted)
  return (
    <div className="flex px-8 py-4 items-center justify-between">
      <div className="flex items-center gap-4">
        <CheckBox isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
        <p className={`text-2xl ${isCompleted ? "line-through text-text-footer-light dark:text-text-footer-dark":"text-text-todos-light dark:text-primary-dark"}`}>{text}</p>
      </div>
      <img src={cross} alt="cross" />
    </div>
  )
}

export default Todo
