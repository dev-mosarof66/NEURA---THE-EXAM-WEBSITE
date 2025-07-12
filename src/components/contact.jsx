import React from 'react'

const contact = () => {
    return (
        <div className=' min-h-screen bg-gradient-to-b from-green-900 to-black text-white p-8'>
            <div>
                <div>
                    <h1 className='text-3xl font-bold text-center mt-10'>Contact Us</h1>
                    <p className='text-center mt-4 text-lg'>
                        If you have any questions or need further information, feel free to reach out to us
                    </p>
                </div>

                <div>
                    <form className='max-w-md mx-auto mt-8 flex flex-col gap-4'>

                        <div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-2' htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    className='w-full p-2 border border-gray-300 rounded'
                                    placeholder='Your Email'
                                    required
                                />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2' htmlFor='message'>Message</label>
                            <textarea
                                id='message'
                                className='w-full p-2 border border-gray-300 rounded resize-none'
                                rows='4'
                                placeholder='Your Message'
                                required
                            ></textarea>

                        </div>
                        <button
                            type='submit'
                            className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 delay-75'>Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact
