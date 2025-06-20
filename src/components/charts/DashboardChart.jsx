import useDashboardData from '../../hooks/useDashboardData';
import { PieChart, Pie, Cell } from 'recharts';

const DashboardChart = () => {
    const { data } = useDashboardData();

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                <PieChart width={180} height={180}>
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

                <div className="w-full space-y-2">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center text-sm sm:text-base"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-gray-700 font-medium">{item.name}</span>
                            </div>
                            <div className="text-gray-600 text-right">
                                ₹{item.value.toLocaleString()} <span className="ml-2">{item.percent}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardChart;
