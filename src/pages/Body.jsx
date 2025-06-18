import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Dashboard from "./Dashboard"
import Header from "../components/Header"


const Body = () => {
    return (
        <div className="flex ">
            <aside >
                <Header />
                <Sidebar />
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Body
