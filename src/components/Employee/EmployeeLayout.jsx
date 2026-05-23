import React from 'react'
import EmployeeHeader from './EmployeeHeader'
import EmployeeTimeLogsSection from './EmployeeTimeLogsSection'

export default function EmployeeLayout() {
  
  return (
    <main className='bg-[#ecf0f1] min-h-screen w-full'>
      <EmployeeHeader/>
      <EmployeeTimeLogsSection/>
    </main>
  )
}
