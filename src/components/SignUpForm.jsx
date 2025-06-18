import React from 'react'

const SignUpForm = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-2'>
                <h1 className='font-bold text-blue-600 text-3xl text-center'>Create an Account</h1>
            </div>
            <div>
                <form className='flex flex-col gap-2 shadow-xl p-6 w-90 '>
                    <label className='font-bold text-blue-600 text-md'>Email Address</label>
                    <input type='email' placeholder='john@gmail.com' className='text-md text-gray-500  border-2 p-2 rounded-md' />
                    <label className='font-bold text-blue-600 text-md'>Name</label>
                    <input type='text' placeholder='John Jane' className='text-md text-gray-500  border-2 p-2 rounded-md' />
                    <label className='font-bold text-blue-600 text-md'>Password</label>
                    <input type='password' placeholder='********' className='text-md text-gray-500  border-2 p-2 rounded-md' />
                    <label className='font-bold text-blue-600 text-md'>Re-enter Password</label>
                    <input type='password' placeholder='********' className='text-md text-gray-500  border-2 p-2 rounded-md' />
                    <button className='bg-blue-600 text-white font-bold p-3 rounded-lg w-full sm:w-30'>Sign Up</button>
                    <p>Already have an account? <span className='text-blue-600 font-semibold'>Login</span> </p>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
