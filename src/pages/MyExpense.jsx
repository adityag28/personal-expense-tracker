import { ChevronDown, Download } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import useExpenseData from '../hooks/useExpenseData';

const MyExpense = () => {
    const {
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedDate,
        setSelectedDate,
        showAddForm,
        setShowAddForm,
        newExpense,
        setNewExpense,
        chartData,
        paymentMethods,
        handleAddExpense,
        handleDeleteExpense,
        filteredExpenses,
    } = useExpenseData();

    return (
        <div className="flex flex-col px-4">
            {/* Header */}
            <div className="flex  justify-between  w-full gap-4">
                {/* Left: Title & Subtitle */}
                <div className="flex flex-col">
                    <h1 className="font-bold text-blue-600 text-lg sm:text-xl lg:text-2xl">
                        Your Expense
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                        Check your expenses
                    </p>
                </div>

                {/* Right: Button */}
                <div>
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                        + Add Expense
                    </button>
                </div>
            </div>



            {/* Chart Section */}
            <div className="bg-white rounded-lg p-4 shadow-sm my-10 w-full">
                <div className="h-52 sm:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#666' }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#666' }}
                                domain={[0, 1000]}
                                ticks={[0, 250, 500, 750, 1000]}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="amount"
                                stroke="#2563EB"
                                strokeWidth={2}
                                fill="url(#colorAmount)"
                                dot={{ fill: '#2563EB', strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, fill: '#2563EB' }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* All Expenses Section */}
            <div className="bg-white rounded-lg shadow-sm w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-2 border-b border-gray-200 gap-4">
                    <h2 className="text-xl font-bold text-gray-800">All Expenses</h2>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 w-full sm:w-auto">
                        <div className="relative w-full sm:w-auto">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full sm:w-36 p-2 border border-gray-300 rounded-lg appearance-none bg-white focus:border-purple-500 focus:outline-none"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>

                        <div className="relative w-full sm:w-auto">
                            <select
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full sm:w-36 p-2 border border-gray-300 rounded-lg appearance-none bg-white focus:border-purple-500 focus:outline-none"
                            >
                                <option value="Date">Date</option>
                                <option value="Today">Today</option>
                                <option value="This Week">This Week</option>
                                <option value="This Month">This Month</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mt-2 sm:mt-0">
                        <Download className="w-4 h-4" />
                        Download
                    </button>
                </div>

                {/* Expense List */}
                <div className="divide-y divide-gray-200">
                    {filteredExpenses.map((expense) => (
                        <div
                            key={expense.id}
                            className="p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-blue-200 flex items-center justify-center">
                                    {expense.category === 'Shopping' && <span className="text-purple-600">🛍️</span>}
                                    {expense.category === 'Petrol' && <span className="text-yellow-600">⛽</span>}
                                    {expense.category === 'Travel' && <span className="text-blue-600">✈️</span>}
                                    {expense.category === 'Food' && <span className="text-green-600">🍽️</span>}
                                    {expense.category === 'Utilities' && <span className="text-yellow-600">⚡</span>}
                                    {expense.category === 'Health' && <span className="text-red-600">🏥</span>}
                                </div>
                                <div>
                                    <h1 className=" text-blue-600 text-base sm:text-lg">
                                        {expense.title}
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        {expense.category} | {expense.paymentMethod}
                                    </p>
                                    <p className="text-xs text-gray-400">{expense.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-lg">₹ {Math.abs(expense.amount)}</span>
                                <div className="flex gap-2">
                                    <button className="text-sm font-medium">Edit</button>
                                    <span className="text-gray-300">|</span>
                                    <button
                                        onClick={() => handleDeleteExpense(expense.id)}
                                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Expense Modal */}
            {showAddForm && (
                <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add New Expense</h2>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Expense Title"
                                value={newExpense.title}
                                onChange={(e) =>
                                    setNewExpense({ ...newExpense, title: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />

                            <select
                                value={newExpense.category}
                                onChange={(e) =>
                                    setNewExpense({ ...newExpense, category: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            >
                                <option value="">Select Category</option>
                                {categories.slice(1).map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={newExpense.paymentMethod}
                                onChange={(e) =>
                                    setNewExpense({ ...newExpense, paymentMethod: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            >
                                <option value="">Select Payment Method</option>
                                {paymentMethods.map((method) => (
                                    <option key={method} value={method}>
                                        {method}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="number"
                                placeholder="Amount"
                                value={newExpense.amount}
                                onChange={(e) =>
                                    setNewExpense({ ...newExpense, amount: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />

                            <input
                                type="date"
                                value={newExpense.date}
                                onChange={(e) =>
                                    setNewExpense({ ...newExpense, date: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />

                            <input
                                type="time"
                                value={newExpense.time}
                                onChange={(e) =>
                                    setNewExpense({ ...newExpense, time: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleAddExpense}
                                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Add Expense
                            </button>
                            <button
                                onClick={() => setShowAddForm(false)}
                                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyExpense;
