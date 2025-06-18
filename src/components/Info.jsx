import React from 'react'
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const navigate = useNavigate()

    const infoCard = [
        {
            head: "📧 Email Integration",
            para: "Automatically extract transaction data from bank emails"
        },
        {
            head: "📊 Smart Insights",
            para: "AI-powered spending analysis and categorization",
        },
        {
            head: "🔒 Secure & Private",
            para: "No bank credentials required, email-based tracking"
        }
    ];


    const handleStartClick = () => {
        navigate("/login")
    }

    return (
        <div className='flex flex-col justify-center items-center my-15 px-4'>
            <h1 className='font-bold text-blue-600 text-3xl text-center'>Automatically Track Your UPI & Card Expenses</h1>
            <p className='text-xl text-gray-500 mt-5 text-center'>Get insights into your spending habits through email transaction analysis </p>
            <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 my-10'>
                <button className='bg-blue-600 text-white font-bold p-3 rounded-lg w-full sm:w-30 cursor-pointer'
                    onClick={handleStartClick}
                >Get Started</button>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-4'>
                {infoCard.map((info, index) => (
                    <div key={index} className='shadow-lg p-4 w-full sm:w-[90%] md:w-[30%] text-center'>
                        <h1 className='font-bold text-blue-600 text-3xl'>{info.head}</h1>
                        <p className='text-lg text-gray-500 mt-5'>{info.para}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Info
