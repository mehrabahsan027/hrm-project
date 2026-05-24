import React, { useState } from 'react'
import EmployeeHeader from './EmployeeHeader'
import EmployeeTimeLogsSection from './EmployeeTimeLogsSection'
import Modal from '../UI/Modal'
import AddEmployee from './AddEmployee'

export default function EmployeeLayout() {
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  
  return (
    <main className='bg-[#ecf0f1] min-h-screen w-full'>
      <EmployeeHeader onAddEmployeeClick={() => setIsAddEmployeeOpen(true)} />
      <EmployeeTimeLogsSection/>

      <Modal
        isOpen={isAddEmployeeOpen}
        onClose={() => setIsAddEmployeeOpen(false)}
        title="Add Employee Log"
      >
        <AddEmployee onClose={() => setIsAddEmployeeOpen(false)} />
      </Modal>
    </main>
  )
}
