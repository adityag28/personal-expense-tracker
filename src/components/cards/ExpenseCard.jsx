import React from 'react';

const ExpenseCard = () => {
    return (
        <div className="flex flex-wrap justify-around gap-4 mb-1 px-1">
            <div className="shadow-lg p-4 text-center rounded-lg  bg-white">
                <h1 className="font-bold text-blue-600 text-xl">₹45,000</h1>
                <p className="text-sm  text-gray-500">Your total expense</p>
            </div>
            <div className="shadow-lg p-4 text-center rounded-lg  bg-white">
                <h1 className="font-bold text-blue-600 text-xl">₹1,509</h1>
                <p className="text-sm  text-gray-500">Daily Avg. Expenses</p>
            </div>
        </div>
    );
};

export default ExpenseCard;
