import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from 'react-datepicker';
// import useDashboardData from '../../hooks/useDashboardData';
import DashboardChart from '../charts/DashboardChart';

const DashboardExpenseBreakdown = () => {
    return (
        <div className="p-4 w-full sm:w-full md:w-[90%] lg:w-120 mt-2 rounded-xl shadow-md bg-white">
            {/* Header with date pickers */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Expense Breakdown</h2>
                <div className="flex flex-col sm:flex-row gap-2">
                    <p className="text-sm border px-2 py-1 rounded w-28 sm:w-32">12/06/2025</p>
                </div>
            </div>
            <DashboardChart />
        </div>
    );
};

export default DashboardExpenseBreakdown;
