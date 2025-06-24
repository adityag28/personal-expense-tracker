import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Insights = () => {
    const data = [
        { month: 'Jan', amount: 200 },
        { month: 'Feb', amount: 300 },
        { month: 'Mar', amount: 250 },
        { month: 'Apr', amount: 350 },
        { month: 'May', amount: 400 },
        { month: 'Jun', amount: 450 },
    ];

    return (
        <div className="flex flex-col lg:flex-row px-4 gap-10">
            <div className='flex flex-col w-full lg:w-[65%]'>
                <h1 className="font-bold text-blue-600 text-lg sm:text-md">
                    Insights
                </h1>
                <p className="text-base sm:text-lg lg:text-md text-gray-600">
                    Check Insights
                </p>

                {/* AI Insight */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-2 my-2">
                    <h2 className="text-base font-semibold mb-2 flex items-center gap-2">🤖 AI Insight</h2>
                    <p className="text-sm">
                        Your food expenses increased by 25% this month. Consider setting a dining budget of ₹8,000 to stay on track with your financial goals.
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="flex flex-col items-center sm:flex-col lg:flex-row lg:justify-between mt-2 gap-4">
                    <div className="shadow-lg p-4 text-center rounded-lg bg-white w-full lg:w-[48%]">
                        <p className="text-xs text-gray-500">This Month</p>
                        <p className="text-lg font-bold text-gray-700">₹12,450</p>
                    </div>
                    <div className="shadow-lg p-4 text-center rounded-lg bg-white w-full lg:w-[48%]">
                        <p className="text-xs text-gray-500">This Month</p>
                        <p className="text-lg font-bold text-gray-700">₹12,450</p>
                    </div>
                </div>

                {/* Trend Chart */}
                <div className="bg-white rounded-lg p-4 shadow-sm my-10 w-full">
                    <h2 className="font-semibold text-gray-700 text-base mb-2 flex items-center gap-2">📈 Historical Trends (6 Months)</h2>
                    <div className="h-52 sm:h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="trendColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                                <Area type="monotone" dataKey="amount" stroke="#6366f1" fill="url(#trendColor)" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Category Analysis */}
                <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
                    <h2 className="font-semibold text-gray-700 text-base mb-4 flex items-center gap-2">🍕 Category-Wise Spend Analysis</h2>
                    {[
                        { name: 'Food & Dining', percent: 35, amount: '₹4,358', emoji: '🍽️', bg: 'bg-yellow-100', color: 'bg-yellow-400' },
                        { name: 'Transportation', percent: 25, amount: '₹3,113', emoji: '🚗', bg: 'bg-blue-100', color: 'bg-blue-500' },
                        { name: 'Shopping', percent: 20, amount: '₹2,490', emoji: '🛍️', bg: 'bg-pink-100', color: 'bg-pink-500' },
                        { name: 'Bills & Utilities', percent: 15, amount: '₹1,868', emoji: '⚡', bg: 'bg-purple-100', color: 'bg-purple-500' },
                        { name: 'Entertainment', percent: 5, amount: '₹621', emoji: '🎬', bg: 'bg-emerald-100', color: 'bg-emerald-500' }
                    ].map((cat, idx) => (
                        <div key={idx} className="flex items-center justify-between mb-4 last:mb-0">
                            <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 ${cat.bg} rounded-lg flex items-center justify-center text-lg`}>
                                    {cat.emoji}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">{cat.name}</p>
                                    <p className="text-xs text-gray-400">{cat.percent}% of total expenses</p>
                                    <div className="w-full h-1 bg-gray-200 mt-1 rounded">
                                        <div className={`h-full rounded ${cat.color}`} style={{ width: `${cat.percent}%` }}></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">{cat.amount}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side Panel */}
            <div className="w-full lg:w-[35%] sm:mt-4 lg:mt-12">
                <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
                    <h2 className="font-semibold text-gray-700 text-base mb-4 flex items-center gap-2">🎯 Spending Habits</h2>
                    {[
                        { title: 'Most Active Day', desc: 'You spend the most on Saturdays, averaging 40% higher than weekdays', value: 'Saturday' },
                        { title: 'Peak Spending Time', desc: 'Most transactions occur between 2-4 PM, especially for food delivery', value: '2:00 - 4:00 PM' },
                        { title: 'Preferred Payment Method', desc: 'UPI accounts for 60% of your transactions, followed by Credit Cards at 35%', value: 'UPI (60%)' },
                        { title: 'Monthly Growth', desc: 'Your expenses have increased by an average of 3% each month over the last 6 months', value: '+3% monthly' },
                    ].map((habit, idx) => (
                        <div key={idx} className="bg-gray-50 border-l-4 border-indigo-500 p-4 rounded-lg mb-3">
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">{habit.title}</h3>
                            <p className="text-sm text-gray-500">{habit.desc}</p>
                            <p className="text-indigo-600 font-semibold text-sm mt-2">{habit.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Insights;
