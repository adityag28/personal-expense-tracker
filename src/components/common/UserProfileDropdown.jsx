import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PiSignOutBold } from 'react-icons/pi';

const UserProfileDropdown = ({ show, onClose }) => {
    const dropdownRef = useRef(null);


    // Close when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    if (!show) return null;

    return (
        <div
            ref={dropdownRef}
            className="absolute right-0 top-12 w-72 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden"
        >
            <div className="px-4 py-3 border-b">
                <p className="text-sm text-gray-500">Signed in as</p>
                <p className="text-sm font-medium text-blue-600 truncate">john.jane@example.com</p>
            </div>

            {/* Optional: You can display recent activity or settings here */}

            <div className="hover:bg-gray-50 transition px-4 py-3">
                <Link
                    to="/login"
                    className="flex items-center text-blue-600 font-medium gap-2"
                >
                    <PiSignOutBold className="w-5 h-5" />
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default UserProfileDropdown;
