import { Outlet } from "react-router-dom";
import CustomerNavbar from "../components/navbars/CustomerNavbar";
import Sidebar from "../components/navbars/Sidebar";
import Expense_Bg from '../assets/bg.jpg';

const Body = () => {
    return (
        <div className="min-h-screen flex flex-col" >
            <CustomerNavbar />
            <div className="flex flex-col sm:flex-row flex-1 min-h-full bg-cover bg-center " style={{ backgroundImage: `url(${Expense_Bg})` }}>
                <Sidebar />
                <main className="flex-1 bg-white/80 p-2 sm:p-4  " >
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Body;
