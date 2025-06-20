import DashboardRecentTransactions from '../components/dashboard/DashboardRecentTransactionCards'
import DashboardExpenseCard from '../components/dashboard/DashboardExpenseCard'
import DashboardExpenseBreakdown from '../components/dashboard/DashboardExpenseBreakdown'

const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row px-4 gap-10">
            <div className='flex flex-col'>
                <h1 className="font-bold text-blue-600 text-lg sm:text-md ">
                    Good Morning, John!
                </h1>
                <p className="text-base sm:text-lg lg:text-md text-gray-600 ">
                    Here's your expense overview
                </p>
                <DashboardExpenseCard />
                <DashboardExpenseBreakdown />
            </div>
            <div>
                <DashboardRecentTransactions />
            </div>
        </div>
    )
}

export default Dashboard
