import React from 'react'
import { motion } from 'motion/react'

const AboutContent = [
    {
        title: "Our Mission",
        description: "To provide a seamless and efficient online examination platform that enhances the learning and assessment experience for both examiners and examinees.",
    }, {
        title: "Our Vision",
        description: "To be the leading online examination platform that revolutionizes the way exams are created and taken, making education more accessible and efficient.",
    }, {
        title: "Our Values",
        description: "Integrity, Innovation, Excellence, and Accessibility are at the core of our operations, guiding us in delivering the best possible service to our users.",
    }
]



const about = () => {
    return (
        <motion.section id='about' className='w-full min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-black to-gray-900 text-white px-4'>
            <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 1.2, delay: 0.25 }} className='mb-12'>
                <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6'>
                    Who We Are?
                </h1>
                <p className='w-[90%] max-w-3xl mx-auto text-center mb-12 text-base sm:text-lg'>
                    This website handles the creation of exams and the taking of exams online, providing a seamless and efficient platform for both examiners and examinees.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                    {
                        AboutContent.map((content, index) => (
                            <div key={index} className='w-[90%] mx-auto bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 delay-75'>
                                <h2 className='text-xl font-semibold mb-2'>{content.title}</h2>
                                <p className='text-gray-300'>{content.description}</p>
                            </div>
                        ))
                    }
                </div>
            </motion.div>

        </motion.section>
    )
}



export default about
