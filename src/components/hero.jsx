import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import { toast } from 'react-hot-toast'
const hero = ({ setIsOpen }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleBookDemo = () => {
        toast.error('Please login to book a demo')
    }
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.75 }} id='home' className='w-full max-w-[85%] mx-auto h-screen flex flex-col pt-20'>
            <div className='flex flex-col items-center justify-center h-full gap-10'>
                <div className='text-center flex flex-col items-center gap-4'>
                    <h1 className='text-3xl xs:text-4xl sm:text-5xl font-semibold'>WHY SO SERIOUS?</h1>
                    <p className='w-full max-w-3xl text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis excepturi tempore in repellendus veniam numquam saepe possimus fuga aliquam, sint quae laudantium atque cupiditate sunt provident.</p>
                </div>
                <div className='w-full max-w-xs mx-auto'>
                    <div className='w-full max-w-2xl flex flex-col items-center justify-between gap-4 sm:flex sm:flex-row sm:justify-between'>
                        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} onClick={handleBookDemo} className='w-full sm:w-fit bg-gradient-to-br bg-secondary via-transparent to-primary rounded-sm py-2 px-4 cursor-pointer transition duration-300 delay-75'>Book A Demo</motion.button>
                        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(true)} className='w-full sm:w-fit bg-gradient-to-br bg-secondary via-transparent to-primary rounded-sm py-2 px-4 cursor-pointer transition duration-300 delay-75'>Get Started</motion.button>

                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default hero
