import React from 'react'
import EmployeeLogsHeader from './EmployeeLogsHeader'
import EmployeeLogsTable from './EmployeeLogsTable'

const EmployeeTimeLogsSection = () => {
  return (
    <section className='w-11/12 border border-[#E1E1E1] mx-auto mt-10 bg-[#FFFFFF] rounded-lg h-125 p-8'>

      <EmployeeLogsHeader/>
      <EmployeeLogsTable/>



      

    </section>
  )
}

export default EmployeeTimeLogsSection

