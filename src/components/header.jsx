import React, { useState } from 'react'
import { motion } from 'motion/react'
import { FaBars, FaTimes } from 'react-icons/fa'


const header = ({ setIsOpen }) => {
    const [menu, setMenu] = useState(false)
    return (
        <div className='w-full'>
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full fixed top-0 left-0 z-50 backdrop-blur-2xl"
            >
                <div className='w-full sm:max-w-[85%] mx-auto p-4 px-8 sm:px-0 flex items-center justify-between '>
                    <div>
                        <h1 className='text-xl font-bold text-secondary'>neura</h1>
                    </div>
                    {/* for small screen  */}
                    <div>
                        <div onClick={() => setMenu(!menu)} className='sm:hidden text-xl text-success hover:text-success/80 active:bg-success/80 focus:text-white transition-all duration-300 delay-75 cursor-pointer'>
                            <FaBars />
                        </div>
                    </div>
                    <div className='hidden sm:flex items-center gap-4'>
                        <nav className='flex items-center py-2 gap-4'>
                            <a href="#home" className='text-white hover:text-white/60 active:text-white/70 focus:text-primary transition-all duration-200 delay-75 cursor-pointer text-sm'>Home</a>
                            <a href="#about" className='text-white hover:text-white/60 active:text-white/70 focus:text-primary transition-all duration-200 delay-75 cursor-pointer text-sm'>About</a>
                            <a href="#pricing" className='text-white hover:text-white/60 active:text-white/70 focus:text-primary transition-all duration-200 delay-75 cursor-pointer text-sm'>Pricing</a>
                            <a href="#contact" className='text-white hover:text-white/60 active:text-white/70 focus:text-primary transition-all duration-200 delay-75 cursor-pointer text-sm'>Contact</a>
                            <motion.button whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }} whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                                onClick={() => setIsOpen(true)}
                                className='w-[80%] mx-auto bg-gradient-to-br from-primary via-secondary to-primary text-sm px-2 text-gray-900 font-medium inset-0.5 p-1 rounded-sm hover:bg-secondary/80 active:bg-secondary/80 cursor-pointer transition duration-300 delay-75'>
                                Get Started
                            </motion.button>
                        </nav>
                    </div>
                </div>
            </motion.header>

            {
                menu && (
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                        className='fixed sm:hidden top-16 left-0 w-full bg-transparent z-50'
                    >
                        <nav className='flex flex-col items-center py-2 gap-4 w-[96%] mx-auto backdrop-blur-md rounded-lg shadow-lg'>
                            <a href="#home" className='text-white hover:text-white/60 active:text-white/70 focus:text-primary transition-all duration-200 delay-75 cursor-pointer'>Home</a>
                            <a href="#about" className='text-white hover:text-white/60 active:text-white/70 focus:text-primary transition-all duration-200 delay-75 cursor-pointer'>About</a>
                            <a href="#services" className='text-white hover:text-white/60 active:text-white/70 focus:text-primary transition-all duration-200 delay-75 cursor-pointer'>Services</a>
                            <a href="#contact" className='text-white hover:text-white/60 active:text-white/70 focus:text-primary transition-all duration-200 delay-75 cursor-pointer'>Contact</a>
                            <motion.button initial={{ scale: 0 }} animate={{
                                scale: 1,
                                transition: { duration: 0.3, delay: 0.1 }
                            }} whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }} whileTap={{
                                scale: 0.9,
                                transition: { duration: 0.1 }
                            }}
                            onClick={() => {
                                setMenu(false);
                                setIsOpen(true);
                            }}
                            className='w-[80%] mx-auto bg-gradient-to-br from-primary via-secondary to-primary text-sm px-2 text-gray-900 font-medium inset-0.5 p-1 rounded-sm hover:bg-secondary/80 active:bg-secondary/80 cursor-pointer transition duration-300 delay-75'>
                                Get Started
                            </motion.button>
                        </nav>
                    </motion.div>
                )
            }

        </div>
    )
}

export default header
