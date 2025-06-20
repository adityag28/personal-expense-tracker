import React, { useEffect, useRef } from 'react';

const NotificationDropdown = ({ show, onClose }) => {
    const dropdownRef = useRef(null);

    const notifications = [
        { user: "Jese", message: "sent you a message", time: "1 min ago" },
        { user: "Joseph", message: "liked your expense post", time: "10 min ago" },
        { user: "Bonnie", message: "commented on your report", time: "30 min ago" }
    ];

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
            className="absolute right-0 top-10 mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-50"
        >
            <div className="bg-gray-100 p-3 font-bold text-gray-700 text-center">Notifications</div>
            <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
                {notifications.map((note, idx) => (
                    <li key={idx} className="p-3 text-sm hover:bg-gray-50">
                        <p className="font-semibold text-gray-800">{note.user}</p>
                        <p className="text-gray-600">{note.message}</p>
                        <p className="text-xs text-blue-500 mt-1">{note.time}</p>
                    </li>
                ))}
            </ul>
            <div className="text-center p-2 bg-gray-100 text-sm text-blue-600 cursor-pointer hover:underline">View All</div>
        </div>
    );
};

export default NotificationDropdown;
