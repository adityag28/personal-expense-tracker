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

const PieGraphChart = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="border p-4 max-w-md mx-auto rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Expense Breakdown</h2>
                <div className="flex gap-2">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        className="text-sm border px-2 py-1 rounded"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="End Date"
                        className="text-sm border px-2 py-1 rounded"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <PieChart width={200} height={200}>
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

                <div className="mt-4 w-full">
                    {data.map((item, index) => (
                        <div key={index} className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-sm font-medium">{item.name}</span>
                            </div>
                            <div className="text-sm">
                                ₹{item.value.toLocaleString()} <span className="ml-2">{item.percent}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PieGraphChart;
