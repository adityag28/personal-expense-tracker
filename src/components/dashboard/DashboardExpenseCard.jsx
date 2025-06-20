import React from 'react';

const DashboardExpenseCard = () => {
    return (
        <div className="flex flex-col items-center sm:flex-col lg:flex-row lg:justify-between gap-4">
            <div className="shadow-lg p-4 text-center rounded-lg bg-white w-full lg:w-[48%]">
                <h1 className="font-bold text-blue-600 text-xl">₹45,000</h1>
                <p className="text-sm text-gray-500">Your total expense</p>
            </div>
            <div className="shadow-lg p-4 text-center rounded-lg bg-white w-full lg:w-[48%]">
                <h1 className="font-bold text-blue-600 text-xl">₹1,509</h1>
                <p className="text-sm text-gray-500">Daily Avg. Expenses</p>
            </div>
        </div>
    );
};

export default DashboardExpenseCard;
