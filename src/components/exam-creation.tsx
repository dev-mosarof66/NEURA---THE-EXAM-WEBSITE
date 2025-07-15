'use client'
import React from 'react'
import { FaPlus, FaFilePdf } from 'react-icons/fa'
import { SiClaude } from "react-icons/si";
import { motion } from 'motion/react'

const ExamCreation = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className='w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* create new exam  */}
                <div className=' sm:h-36 lg:h-40 border border-gray-500 w-[100%] lg:w-sm mx-auto flex flex-col items-center justify-center gap-2 py-6 rounded-sm hover:bg-gray-500/30 active:bg-gray-500/40 cursor-pointer transition-colors duration-500 delay-75 group'>
                    <FaPlus className='text-xl sm:text-2xl group-hover:text-amber-500 group-active:text-amber-500 transition duration-300 delay-75' />
                    <p className='text-lg sm:text-xl'>New Exam</p>
                </div>
                {/* create exam using ai  */}
                <div className=' sm:h-36 lg:h-40 border border-gray-500 w-[100%] lg:w-sm mx-auto flex flex-col items-center justify-center gap-2 py-6 rounded-sm hover:bg-gray-500/30 active:bg-gray-500/40 cursor-pointer transition-colors duration-500 delay-75 group'>
                    <SiClaude className='text-xl sm:text-2xl group-hover:text-amber-500 group-active:text-amber-500 transition duration-300 delay-75' />
                    <p className='text-lg sm:text-xl'>Create Exam with AI</p>
                </div>
                <div className=' sm:h-36 lg:h-40 border border-gray-500 w-[100%] lg:w-sm mx-auto flex flex-col items-center justify-center gap-2 py-6 rounded-sm hover:bg-gray-500/30 active:bg-gray-500/40 cursor-pointer transition-colors duration-500 delay-75 group'>
                    <FaFilePdf className='text-xl sm:text-2xl group-hover:text-amber-500 group-active:text-amber-500 transition duration-300 delay-75' />
                    <p className='text-lg sm:text-xl'>Upload PDF</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ExamCreation