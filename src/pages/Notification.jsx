const Notification = () => {
    const notifications = [
        { user: "Jese", message: "sent you a message", time: "1 min ago" },
        { user: "Joseph", message: "liked your expense post", time: "10 min ago" },
        { user: "Bonnie", message: "commented on your report", time: "30 min ago" }
    ];

    return (
        <div className="w-full px-4 sm:px-6 md:px-8">
            <div className='flex flex-col mb-4'>
                <h1 className="font-bold text-blue-600 text-lg sm:text-xl md:text-2xl">
                    Notification's
                </h1>
            </div>
            <ul className="divide-y divide-gray-200">
                {notifications.map((note, idx) => (
                    <li
                        key={idx}
                        className="p-3 text-sm sm:text-base hover:bg-gray-50"
                    >
                        <p className="font-semibold text-gray-800">{note.user}</p>
                        <p className="text-gray-600">{note.message}</p>
                        <p className="text-xs sm:text-sm text-blue-500 mt-1">{note.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;
