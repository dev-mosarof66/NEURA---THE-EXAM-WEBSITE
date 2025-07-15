import ExamCreation from '@/components/exam-creation';
import PreviousExams from '@/components/previous-exmas';
import React from 'react'


const page = () => {
  return (
    <div className='w-full min-h-screen p-8 my-10 space-y-7'>
      {/* creation section  */}
      <ExamCreation />
      {/* previous exams  */}
      <PreviousExams />
    </div>
  )
}

export default page