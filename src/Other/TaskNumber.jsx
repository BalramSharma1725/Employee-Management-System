import React from 'react'

const TaskNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[40%] py-5 px-6 bg-red-500'>
        <h2 className='text-3xl font-semibold'>0r</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[40%] py-5 px-6 bg-blue-500'>
          <h2 className='text-3xl font-semibold'>0r</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[40%] py-5 px-6 bg-green-500'>
          <h2 className='text-3xl font-semibold'>0r</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[40%] py-5 px-6 bg-yellow-500'>
          <h2 className='text-3xl font-semibold'>0r</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>

    
  )
}

export default TaskNumber