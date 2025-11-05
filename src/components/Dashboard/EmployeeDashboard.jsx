import React from 'react'
import Headers from '../../Other/Header'
import TaskNumber from '../../Other/TaskNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1E] h-screen'>
       <Header />
       <TaskNumber />
       <TaskList />
    </div>
  )
}

export default EmployeeDashboard