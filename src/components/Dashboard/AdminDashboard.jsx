import React from 'react'
import Headers from '../../Other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
        <Headers />
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full item-start justify-between'>
                <div className='w-1/2'>
                    <div> 
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input type="date" name="" id="" />
                    </div>
                    <div>
                        <h3>Assign To</h3>
                        <input type="text" placeholder='employee name'/>
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input type="text" placeholder='Design, Dev, etc..'/>
                    </div>
                </div>
                <div className='w-1/2'> 
                    <h3>Task Description</h3>
                    <textarea name="" id=""></textarea>
                </div>
                <button>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard