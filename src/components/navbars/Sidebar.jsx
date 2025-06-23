import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleNav } from '../../store/navSlice';
import { MdSpaceDashboard } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { CgInsights } from "react-icons/cg";
import { MdDisplaySettings } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { IoNotifications } from 'react-icons/io5';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isNav = useSelector(store => store.nav.isNavOpen);

    if (!isNav) return null;

    const handleLinkClick = () => {
        if (window.innerWidth < 640) {
            dispatch(toggleNav());
        }
    };


    return (
        <div className='w-50  shadow-lg bg-white fixed sm:static z-50 h-screen sm:h-auto overflow-y-auto'>
            <ul>
                <li>
                    <Link to='dashboard' onClick={handleLinkClick} className='flex items-center px-4 pt-5 gap-2'>
                        <MdSpaceDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to='expense' onClick={handleLinkClick} className='flex items-center px-4 pt-5 gap-2'>
                        <TbReportMoney className="w-5 h-5" />
                        My Expense
                    </Link>
                </li>
                <li>
                    <Link to='insights' onClick={handleLinkClick} className='flex items-center  px-4 pt-5 gap-2'>
                        <CgInsights className="w-5 h-5" />
                        Insights
                    </Link>
                </li>
                <li>
                    <Link to='notification' onClick={handleLinkClick} className='flex items-center  px-4 pt-5 gap-2'>
                        <IoNotifications className="w-5 h-5" />
                        Notification
                    </Link>
                </li>
                <li>
                    <Link to='setup' onClick={handleLinkClick} className='flex items-center  px-4 pt-5 gap-2'>
                        <MdDisplaySettings className="w-5 h-5" />
                        Setup
                    </Link>
                </li>
                <li>
                    <Link to='/login' onClick={handleLinkClick} className='flex items-center  px-4 pt-5 gap-2'>
                        <PiSignOutBold className="w-5 h-5" />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
