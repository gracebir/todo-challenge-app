import React from 'react'
import checked from '../assets/icon-check.svg'

function CheckBox({isCompleted, setIsCompleted}) {
  return (
    <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full cursor-pointer todo-gradian p-[1px]" onClick={()=>setIsCompleted(!isCompleted)}>
      <div className={`${isCompleted ? "bg-none":"bg-bg-input-light dark:bg-bg-input-dark"} w-full h-full rounded-full`}>
        {isCompleted && (
          <div className="w-full h-full flex items-center justify-center">
              <img className="h-3" src={checked} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckBox
