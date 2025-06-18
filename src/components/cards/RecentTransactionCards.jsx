import React from 'react'

const RecentTransactionCards = () => {

    const transactionData = [
        {
            transactionNote: "Petrol",
            category: "Petrol",
            date: "12-03-2025",
            paymentMethod: "Credit Card",
            amount: "₹450"
        },
        {
            transactionNote: "Swiggy",
            category: "Food",
            date: "15-06-2025",
            paymentMethod: "UPI",
            amount: "₹400"
        },
        {
            transactionNote: "Petrol",
            category: "Petrol",
            date: "12-03-2025",
            paymentMethod: "Credit Card",
            amount: "₹450"
        },
        {
            transactionNote: "Swiggy",
            category: "Food",
            date: "15-06-2025",
            paymentMethod: "UPI",
            amount: "₹400"
        },
        {
            transactionNote: "Petrol",
            category: "Petrol",
            date: "12-03-2025",
            paymentMethod: "Credit Card",
            amount: "₹450"
        },
        {
            transactionNote: "Swiggy",
            category: "Food",
            date: "15-06-2025",
            paymentMethod: "UPI",
            amount: "₹400"
        },
        {
            transactionNote: "Petrol",
            category: "Petrol",
            date: "12-03-2025",
            paymentMethod: "Credit Card",
            amount: "₹450"
        },
        {
            transactionNote: "Swiggy",
            category: "Food",
            date: "15-06-2025",
            paymentMethod: "UPI",
            amount: "₹400"
        },
    ];

    return (
        <div className="px-4 pt-2  w-120 h-98 mx-auto rounded-xl shadow-md bg-white">
            <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-700">Recent Transactions</h2>
                    <p className="text-sm sm:text-lg font-semibold text-blue-500 cursor-pointer">See All</p>
                </div>

                {/* Scrollable List */}
                <div className="flex flex-col gap-4 max-h-75 overflow-y-auto pr-2">
                    {transactionData.map((transaction, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b pb-2"
                        >
                            <div className="space-y-1">
                                <h1 className="font-bold text-blue-600 text-base sm:text-lg">{transaction.transactionNote}</h1>
                                <p className="text-sm text-gray-500">
                                    {transaction.category} | {transaction.paymentMethod}
                                </p>
                                <p className="text-xs text-gray-400">{transaction.date}</p>
                            </div>
                            <div>
                                <p className="text-sm sm:text-base text-gray-600 font-semibold">{transaction.amount}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentTransactionCards
