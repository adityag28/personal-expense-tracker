import React from 'react'
import ExpenseBreakdown from '../components/ExpenseBreakdown'
import DashboardRecentTransactions from '../components/cards/RecentTransactionCards'
import ExpenseCard from '../components/cards/ExpenseCard'
import RecentTransactionCards from '../components/cards/RecentTransactionCards'

const Dashboard = () => {
    return (
        <div className='p-1 '>
            <div>
                <h1 className='font-semibold text-blue-600 text-xl '>Good Morning, John!</h1>
                <p className='text-md text-gray-500'>Here's your expense overview</p>
                <ExpenseCard />
            </div>
            <div className='flex gap-10'>
                <ExpenseBreakdown />
                <RecentTransactionCards />
            </div>
        </div>
    )
}

export default Dashboard
