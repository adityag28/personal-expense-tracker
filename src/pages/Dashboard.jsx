import React from 'react'
import ExpenseBreakdown from '../components/ExpenseBreakdown'
import DashboardRecentTransactions from '../components/cards/RecentTransactionCards'
import ExpenseCard from '../components/cards/ExpenseCard'
import RecentTransactionCards from '../components/cards/RecentTransactionCards'

const Dashboard = () => {
    return (
        <div className='px-4 '>
            <div>
                <h1 className='font-bold text-blue-600 text-2xl '>Good Morning, John!</h1>
                <p className='text-lg text-gray-500'>Here's your expense overview</p>
                <ExpenseCard />
            </div>
            <div className='flex'>
                <ExpenseBreakdown />
                <RecentTransactionCards />
            </div>
        </div>
    )
}

export default Dashboard
