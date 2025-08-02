import { Sun, Moon, Bell } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import { useTheme } from '../Context/Context'
import { useState } from "react";

export default function Nav() {
    const status = true; // request from database
    const { theme, toggleTheme } = useTheme();
    const [bellAnimation, setBellAnimation] = useState(false);
    const navigate = useNavigate()

    const handleBellClick = () => {
        setBellAnimation(true);
        setTimeout(() => setBellAnimation(false), 500);
    };

    return (
        <div className='relative flex justify-between items-center py-3 px-10'>
            {/* logo */}
            <div className="flex gap-3 cursor-pointer">
                <img src="/logo1.png" alt="logo" className='w-8 h-8 cursor-pointer'
                    onClick={() => navigate('/')} />
                <h3 className="text-xl font-bold text-blue-400">Quick Desk</h3>
            </div>

            {/* sign-up and theme */}
            <div className='flex gap-3 items-center'>

                {/* Bell Icon */}
                <Bell
                    className={`w-5 h-5 text-gray-600 cursor-pointer hover:scale-110 transition ${bellAnimation ? 'animate-bounce' : ''}`}
                    onClick={handleBellClick}
                />

                {/* Dashboard Button */}
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    onClick={() => navigate('/dashboard')}
                >
                    Dashboard
                </button>


                {/* Login Button */}
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    onClick={() => navigate('/login')}
                >
                    Sign In
                </button>

                {/* Theme Toggle */}
                <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    onClick={toggleTheme}
                >
                    {theme ? <Sun className="w-5 h-5 text-gray-400 bg-white" /> : <Moon className="w-5 h-5 text-gray-400 bg-white" />}
                </button>

            </div>
        </div>
    )
}
