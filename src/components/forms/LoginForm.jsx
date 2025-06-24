// ✅ Updated LoginForm with mock OTP verification flow
import React, { useRef, useState } from 'react';
import { checkValidData } from '../../utils/validate';
import Expense_Bg from '../../assets/bg.jpg';
import HomeNavbar from '../navbars/HomeNavbar';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [enteredOtp, setEnteredOtp] = useState('');
    const navigate = useNavigate();

    const email = useRef(null);
    const name = useRef(null);

    const MOCK_OTP = '123456';

    const handleVerifyClick = () => {
        const emailValue = email.current.value;
        const nameValue = name.current?.value || '';

        const message = isSignIn
            ? checkValidData(emailValue, 'dummy')
            : checkValidData(emailValue, 'dummy', nameValue);

        if (message) {
            setErrorMessage(message);
            return;
        }

        setErrorMessage(null);
        setShowOtpInput(true);
    };

    const handleOtpSubmit = () => {
        if (enteredOtp === MOCK_OTP) {
            navigate('/overview');
        } else {
            setErrorMessage('Invalid OTP. Please try again.');
        }
    };

    const toggleLoginForm = () => {
        setIsSignIn(!isSignIn);
        setShowOtpInput(false);
        setErrorMessage(null);
        setEnteredOtp('');
    };

    return (
        <div className="min-h-full bg-cover bg-center" style={{ backgroundImage: `url(${Expense_Bg})` }}>
            <div className="bg-white/80 min-h-screen">
                <HomeNavbar />
                <div className='flex flex-col justify-center items-center mt-6 px-4'>
                    <div>
                        <h1 className='font-bold text-blue-600 text-lg sm:text-md text-center'>
                            {isSignIn ? "Login" : "Sign Up"}
                        </h1>
                        <p className='text-md text-gray-600 mb-4 text-center'>
                            {isSignIn ? "Please enter your credentials to login" : "To join with us please fill all credentials"}
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-col gap-3 shadow-xl rounded-lg bg-gray-100 p-6 w-90'>
                            <label className='font-bold text-blue-600 text-md md:text-lg'>Email Address</label>
                            <input
                                ref={email}
                                type='email'
                                placeholder='john@gmail.com'
                                className='text-md text-gray-500 border-2 p-2 rounded-md'
                            />
                            {!isSignIn && (
                                <div className='flex flex-col'>
                                    <label className='font-bold text-blue-600 text-md'>Name</label>
                                    <input
                                        ref={name}
                                        type='text'
                                        placeholder='John Jane'
                                        className='text-md text-gray-500 border-2 p-2 rounded-md'
                                    />
                                </div>
                            )}

                            {!showOtpInput ? (
                                <>
                                    <p className='font-bold text-red-500'>{errorMessage}</p>
                                    <button
                                        className='bg-blue-600 text-white font-bold p-3 rounded-lg w-30 cursor-pointer'
                                        onClick={handleVerifyClick}
                                    >
                                        Verify
                                    </button>
                                </>
                            ) : (
                                <>
                                    <label className='font-bold text-blue-600 text-md'>Enter OTP</label>
                                    <input
                                        type='text'
                                        value={enteredOtp}
                                        onChange={(e) => setEnteredOtp(e.target.value)}
                                        placeholder='Enter OTP (e.g., 123456)'
                                        className='text-md text-gray-500 border-2 p-2 rounded-md'
                                    />
                                    <p className='font-bold text-red-500'>{errorMessage}</p>
                                    <button
                                        className='bg-green-600 text-white font-bold p-3 rounded-lg w-30 cursor-pointer'
                                        onClick={handleOtpSubmit}
                                    >
                                        Submit OTP
                                    </button>
                                </>
                            )}

                            <p onClick={toggleLoginForm} className='cursor-pointer'>
                                {isSignIn ? " Create an account? " : "Already have an account? "}
                                <span className='text-blue-600 font-semibold'>
                                    {isSignIn ? "Sign Up Now" : "Login"}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
