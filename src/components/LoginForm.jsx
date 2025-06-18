import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate'

const LoginForm = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)


    const handleFormClick = () => {
        const emailValue = email.current.value;
        const passwordValue = password.current.value;

        if (!isSignIn) {
            const nameValue = name.current.value;
            const message = checkValidData(emailValue, passwordValue, nameValue);
            if (message) {
                setErrorMessage(message);
                return;
            }
        } else {
            const message = checkValidData(emailValue, passwordValue);
            if (message) {
                setErrorMessage(message);
                return;
            }
        }

        setErrorMessage(null);
        console.log("Form is valid");
    };

    const toggleLoginForm = () => {
        setIsSignIn(!isSignIn)
    }




    return (
        <div className='flex flex-col justify-center items-center mt-1'>
            <div>
                <h1 className='font-bold text-blue-600 text-xl text-center'>
                    {isSignIn ? "Login" : "Sign Up"}
                </h1>
                <p className='text-lg text-gray-500 text-center'>
                    {isSignIn ? "Please enter your credentials to login" : "To join with us please fill all credentials"}
                </p>
            </div>
            <div>
                <form
                    onSubmit={(e) => { e.preventDefault() }}
                    className='flex flex-col gap-3 shadow-xl rounded-lg bg-gray-100 p-6 w-90 '
                >
                    <label className='font-bold text-blue-600 text-md'>Email Address</label>
                    <input
                        ref={email}
                        type='email'
                        placeholder='john@gmail.com'
                        className='text-md text-gray-500  border-2 p-2 rounded-md'
                    />
                    {!isSignIn && (
                        <div className='flex flex-col'>
                            <label className='font-bold text-blue-600 text-md'>Name</label>
                            <input
                                ref={name}
                                type='text'
                                placeholder='John Jane'
                                className='text-md text-gray-500  border-2 p-2 rounded-md'
                            />
                        </div>
                    )}
                    <label className='font-bold text-blue-600 text-md'>Password</label>
                    <input
                        ref={password}
                        type='password'
                        placeholder='********'
                        className='text-md text-gray-500  border-2 p-2 rounded-md'
                    />
                    <p className='font-bold text-red-500'>{errorMessage}</p>
                    <button
                        className='bg-blue-600 text-white font-bold p-3 rounded-lg w-full sm:w-30 cursor-pointer'
                        onClick={handleFormClick}
                    >
                        {isSignIn ? "Login" : "Sign Up"}
                    </button>
                    <p onClick={toggleLoginForm} className='cursor-pointer'>
                        {isSignIn ? " Create an account? " : "Already have an account? "}
                        <span className='text-blue-600 font-semibold'>
                            {isSignIn ? "Sign Up Now" : "Login"}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
