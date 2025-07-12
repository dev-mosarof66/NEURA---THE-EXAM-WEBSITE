import React from 'react'

const footer = () => {
  return (
    <div className='bg-black text-white p-6 pt-10 text-center'>
      <div>
        <p>
            &copy; {new Date().getFullYear()} Neura Exam Website. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default footer
