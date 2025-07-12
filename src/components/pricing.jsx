import React from 'react'
import { motion } from 'motion/react'

const Pricing = [
    {
        title: "Basic Plan",
        description: "Ideal for individual users or small teams, offering essential features for online exam creation and management.",
        buttonText: "Basic"
    }, {
        title: "Pro Plan",
        description: "Designed for larger teams and organizations, providing advanced features and enhanced support.",
        buttonText: "Be Pro"
    }, {
        title: "Enterprise Plan",
        description: "Tailored solutions for educational institutions and corporations, offering custom features and dedicated support.",
        buttonText: "Contact Sales"
    }
]
const pricing = () => {
    return (
        <div id='pricing' className=' w-full h-[1200px] sm:h-0 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-green-900'>
            <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 1.2, delay: 0.25 }} className='mb-12'>
                <div className='max-w-7xl mx-auto mb-12 text-center'>
                    <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6'>Why Choose Us?</h1>
                    <p className='w-[90%] max-w-3xl mx-auto text-center mb-12 text-base sm:text-lg'>
                        We are committed to providing a user-friendly and efficient online examination platform that meets the needs of both examiners and examinees. Our platform is designed to be accessible, reliable, and secure, ensuring a smooth examination experience for all users.
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                    {
                        Pricing.map((plan, index) => (
                            <div key={index} className='w-[90%] max-w-md mx-auto rounded-lg shadow-sm hover:shadow-md transition-all duration-300 delay-75 shadow-black p-6 mb-4 text-center'>
                                <h2 className='text-2xl font-semibold mb-4'>{plan.title}</h2>
                                <p className=' text-gray-500 mb-4'>{plan.description}</p>
                                <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className='w-[80%] sm:w-[60%] bg-gradient-to-br bg-secondary via-transparent to-primary rounded-sm py-2 px-4 cursor-pointer transition duration-300 delay-75'>
                                    {
                                        plan.buttonText
                                    }
                                </motion.button>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default pricing
