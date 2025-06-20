import { Outlet } from "react-router-dom";
import CustomerNavbar from "../components/navbars/CustomerNavbar";
import Sidebar from "../components/navbars/Sidebar";

const Body = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <CustomerNavbar />
            <div className="flex flex-col sm:flex-row flex-1">
                <Sidebar />
                <main className="flex-1 bg-white p-2 sm:p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Body;
