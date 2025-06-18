import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const data = [
    { name: 'Food', value: 15840, color: '#FFB6C1', percent: 35 },
    { name: 'Transport', value: 15840, color: '#8B0000', percent: 20 },
    { name: 'Shopping', value: 15840, color: '#FFD700', percent: 18 },
    { name: 'Petrol', value: 15840, color: '#00C49F', percent: 15 },
    { name: 'Others', value: 15840, color: '#9370DB', percent: 12 },
];

const ExpenseBreakdown = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="p-4 sm:p-6 w-full max-w-3xl mx-auto rounded-xl shadow-md bg-white">
            {/* Header with date pickers */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Expense Breakdown</h2>
                <div className="flex flex-col sm:flex-row gap-2">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        className="text-sm border px-3 py-1 rounded w-full sm:w-36"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="End Date"
                        className="text-sm border px-3 py-1 rounded w-full sm:w-36"
                    />
                </div>
            </div>

            {/* Pie Chart */}
            <div className="flex flex-col items-center">
                <PieChart width={220} height={180}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        cx="50%"
                        cy="50%"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>

                {/* Legend */}
                <div className="w-full mt-4 space-y-2">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b pb-1 text-sm sm:text-base"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-gray-700 font-medium">{item.name}</span>
                            </div>
                            <div className="text-gray-600">
                                ₹{item.value.toLocaleString()} <span className="ml-2">{item.percent}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpenseBreakdown;
