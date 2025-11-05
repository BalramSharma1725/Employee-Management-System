import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 rounded-xl'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-500 rounded-xl'>
            <div className='flex justify-between items-center p-3'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded-l-xl'>High</h3>
                <h4 className='txt-sm'>4 nov 2025</h4>
            </div>
            <h2 className='mt-5 text-xxl font-semibold'>Complete this task</h2>
            <p className='text-sm mt-2'>This is a description of the task that needs to be completed.</p>
        </div>
       <div className='flex-shrink-0 h-full w-[300px] bg-green-500 rounded-xl'>
            <div className='flex justify-between items-center p-3'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded-l-xl'>High</h3>
                <h4 className='txt-sm'>4 nov 2025</h4>
            </div>
            <h2 className='mt-5 text-xxl font-semibold'>Complete this task</h2>
            <p className='text-sm mt-2'>This is a description of the task that needs to be completed.</p>
        </div>

           <div className='flex-shrink-0 h-full w-[300px] bg-blue-500 rounded-xl'>
            <div className='flex justify-between items-center p-3'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded-l-xl'>High</h3>
                <h4 className='txt-sm'>4 nov 2025</h4>
            </div>
            <h2 className='mt-5 text-xxl font-semibold'>Complete this task</h2>
            <p className='text-sm mt-2'>This is a description of the task that needs to be completed.</p>
        </div>

    </div>
    
  )
}

export default TaskList