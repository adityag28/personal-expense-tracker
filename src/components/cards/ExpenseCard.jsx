import React from 'react';

const ExpenseCard = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4 px-2">
            <div className="shadow-lg p-4 text-center rounded-lg w-full sm:w-[48%] md:w-[45%] lg:w-[30%] bg-white">
                <h1 className="font-bold text-blue-600 text-xl sm:text-2xl">₹45,000</h1>
                <p className="text-sm sm:text-base text-gray-500">Your total expense</p>
            </div>
            <div className="shadow-lg p-4 text-center rounded-lg w-full sm:w-[48%] md:w-[45%] lg:w-[30%] bg-white">
                <h1 className="font-bold text-blue-600 text-xl sm:text-2xl">₹1,509</h1>
                <p className="text-sm sm:text-base text-gray-500">Daily Avg. Expenses</p>
            </div>
        </div>
    );
};

export default ExpenseCard;
