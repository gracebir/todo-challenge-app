import React from 'react'

function TodoForm() {
    return (
        <div className="w-full bg-bg-input-light dark:bg-bg-input-dark flex items-center px-8 py-4 gap-4 rounded-md">
            <div className='border border-gray-text-light dark:border-text-footer-dark h-8 w-8 rounded-full cursor-pointer'></div>
            <input className="w-full text-2xl text-text-todos-light dark:text-text-todos-dark bg-bg-input-light placeholder:text-text-footer-dark dark:bg-bg-input-dark outline-none" placeholder='Create a new todo..' type="text" />
        </div>
    )
}

export default TodoForm
