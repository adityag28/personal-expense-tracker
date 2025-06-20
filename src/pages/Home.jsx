import { useNavigate } from 'react-router-dom';
import HomeNavbar from '../components/navbars/HomeNavbar';
import Expense_Bg from '../assets/bg.jpg';

const Home = () => {
    const navigate = useNavigate();

    const infoCard = [
        { head: "📧 Email Integration", para: "Automatically extract transaction data from bank emails" },
        { head: "📊 Smart Insights", para: "AI-powered spending analysis and categorization" },
        { head: "🔒 Secure & Private", para: "No bank credentials required, email-based tracking" }
    ];

    const handleStartClick = () => {
        navigate("/login");
    };

    return (
        <div className="min-h-full bg-cover bg-center" style={{ backgroundImage: `url(${Expense_Bg})` }}>
            <div className="bg-white/80 min-h-screen">
                <HomeNavbar />
                <div className="flex flex-col justify-center items-center my-10 p-4 sm:p-6">
                    <h1 className="font-bold text-blue-600 text-xl sm:text-2xl lg:text-3xl text-center">
                        Automatically Track Your Expenses
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-2 text-center">
                        Get insights into your spending habits through email transaction analysis
                    </p>
                    <div className="flex flex-col gap-5 my-10">
                        <button
                            className="bg-blue-600 text-white font-bold p-3 rounded-lg w-30 cursor-pointer"
                            onClick={handleStartClick}
                        >
                            Get Started
                        </button>
                    </div>
                    <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6">
                        {infoCard.map((info, index) => (
                            <div
                                key={index}
                                className="shadow-lg p-4 w-full sm:w-[90%] md:w-[70%] lg:w-[30%] text-center bg-white rounded-md"
                            >
                                <h1 className="font-bold text-blue-600 text-xl">{info.head}</h1>
                                <p className="text-base sm:text-lg text-gray-500 mt-2">{info.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
