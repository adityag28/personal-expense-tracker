import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Sidebar = () => {

    const isNav = useSelector(store => store.nav.isNavOpen);
    if (!isNav) return null

    return (
        <div className='flex flex-col w-50 text-blue-600  justify-between p-4 '>
            <ul>
                <li >
                    <Link to='dashboard' className='flex items-center p-1 font-semibold text-lg'>
                        Dashboard
                    </Link>
                </li>
                <li >
                    <Link to='expense' className='flex items-center p-1 font-semibold text-lg'>
                        My Expense
                    </Link>
                </li>
                <li >
                    <Link to='insights' className='flex items-center p-1 font-semibold text-lg'>
                        Insights
                    </Link>
                </li>
                <li >
                    <Link to='notifications' className='flex items-center p-1 font-semibold text-lg'>
                        Notifications

                    </Link>
                </li>
                <li >
                    <Link to='setup' className='flex items-center p-1 font-semibold text-lg'>
                        Setup
                    </Link>
                </li>
                <li >
                    <Link to='settings' className='flex items-center p-1 font-semibold text-lg'>
                        Account Settings

                    </Link>
                </li>
                <li >
                    <Link to='/login' className='flex items-center p-1 font-semibold text-lg'>
                        Logout

                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
