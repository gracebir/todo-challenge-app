import React from 'react'

function TodoForm() {
    return (
        <div className="w-full bg-bg-input-light dark:bg-bg-input-dark flex items-center lg:px-8 px-5 py-4 gap-4 rounded-md">
            <div className='border border-gray-text-light dark:border-text-footer-dark h-6 w-6 lg:h-8 lg:w-8 rounded-full cursor-pointer'/>
            <input className="w-full lg:text-2xl text-base text-text-todos-light dark:text-text-todos-dark bg-bg-input-light placeholder:text-text-footer-dark dark:bg-bg-input-dark outline-none" placeholder='Create a new todo..' type="text" />
        </div>
    )
}

export default TodoForm
