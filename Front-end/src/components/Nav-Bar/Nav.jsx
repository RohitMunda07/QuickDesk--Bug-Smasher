import { Sun } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Nav() {
    const status = true; // request from database
    const navigate = useNavigate()

    return (
        <div className='relative flex justify-between items-center py-3 px-10'>
            {/* logo */}
            <div>
                <img src="/logo1.png" alt="logo" className='w-8 h-8 cursor-pointer'
                    onClick={() => navigate('/')} />
            </div>

            {/* sign-up and theme */}
            <div className='flex gap-3 items-center'>
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
                    onClick={()=>navigate('/login')}
                >
                    Sign In
                </button>


                {/* Theme Toggle */}
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <Sun className="w-5 h-5 text-gray-400" />
                </button>

            </div>
        </div>
    )
}
