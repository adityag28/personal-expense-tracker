import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { toggleNav } from '../../store/navSlice';
import NotificationDropdown from '../common/NotificationDropdown';
import UserProfileDropdown from '../common/UserProfileDropdown';

const CustomerNavbar = () => {
    const dispatch = useDispatch();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserProfile, setShowUserProfile] = useState(false)

    const toggleMenuHandler = () => dispatch(toggleNav());
    const toggleNotificationDropdown = () => setShowNotifications(prev => !prev);
    const toggleUserProfileDropdown = () => setShowUserProfile(prev => !prev);

    return (
        <div className='relative z-50'>
            <div className='flex justify-between items-center p-4 bg-blue-600 shadow-lg'>
                <RxHamburgerMenu
                    className='text-2xl sm:text-3xl text-white font-bold cursor-pointer'
                    onClick={toggleMenuHandler}
                />
                <h1 className="font-bold text-white text-md sm:text-lg text-center">💰 Expense Tracker</h1>
                <div className='flex gap-5 relative'>
                    <IoNotifications
                        className='text-2xl sm:text-3xl text-white cursor-pointer'
                        onClick={toggleNotificationDropdown}
                    />
                    <FaUserCircle
                        className='text-2xl sm:text-3xl text-white'
                        onClick={toggleUserProfileDropdown}
                    />

                    <NotificationDropdown
                        show={showNotifications}
                        onClose={() => setShowNotifications(false)}
                    />
                    <UserProfileDropdown
                        show={showUserProfile}
                        onClose={() => setShowUserProfile(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomerNavbar;
