'use client'
import React, { useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { motion } from 'motion/react'

const Items = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Recent"
    },
    {
        id: 3,
        name: "Past"
    },
    {
        id: 4,
        name: "By Date"
    },
    {
        id: 5,
        name: "By Name"
    },
]

const FakeExamData = [
    {
        name: "Organic Chemistry - 01",
        time: "3 months ago"
    },
    {
        name: "Inorganic Chemistry - 02",
        time: "5 months ago"
    },
    {
        name: "Organic Chemistry - 02",
        time: "7 months ago"
    },
    {
        name: "Differentiation - 01",
        time: "3 days ago"
    },
    {
        name: "Organic Chemistry CQ - 01",
        time: "3 hours ago"
    },
    {
        name: "Organic Chemistry - 01",
        time: "3 months ago"
    },
    {
        name: "Inorganic Chemistry - 02",
        time: "5 months ago"
    },
    {
        name: "Organic Chemistry - 02",
        time: "7 months ago"
    },
    {
        name: "Differentiation - 01",
        time: "3 days ago"
    },
    {
        name: "Organic Chemistry CQ - 01",
        time: "3 hours ago"
    },
]

function PreviousExams() {
    const [selectedItems, setSelectedItems] = useState(1)
    return (
        <div className='w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 gap-2'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className='flex items-center gap-6 my-6'>
                {
                    Items.map((item, index) => {
                        return (
                            <div onClick={() => setSelectedItems(item.id)} key={item.id} className={`${selectedItems === item.id ? "border border-gray-500 px-4 py-0.5 rounded-sm bg-gray-500/30 cursor-pointer duration-300 delay-75" : "cursor-pointer transition duration-300 delay-75"}`}>
                                <h1>{item.name}</h1>
                            </div>
                        )
                    })
                }
            </motion.div>

            {/* exam list  */}
            <motion.div initial={{
                opacity: 0
            }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className='grid grid-cols-1 gap-3'>
                {
                    FakeExamData.map((exam, index) => (
                        <motion.div initial={{ y: 25 }} animate={{ y: 0 }} transition={{
                            duration: 0.2,
                            delay: index * 0.01
                        }} className='w-full flex items-center justify-between bg-gray-600/30 px-6 py-3 rounded-lg hover:bg-gray-600/50 active:bg-gray-600/50 hover:scale-105 active:scale-105 cursor-pointer transition duration-300 delay-75'>
                            <div className='flex flex-col gap-1'>
                                <h1>{exam.name}</h1>
                                <p className='text-sm'>{exam.time}</p>
                            </div>
                            <div className='text-xl sm:text-2xl hover:text-amber-500 active:text-amber-500 hover:bg-gray-500/30 active:bg-gray-500/30 p-1 rounded-sm cursor-pointer'>
                                <HiOutlineDotsVertical />
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default PreviousExams