import React, { useState } from 'react';
import { postMethod } from '../Axios/axios.js';
import { Eye, EyeOff, Zap, Users, Bug, XCircle } from 'lucide-react';
import { useTheme } from '../Context/Context.jsx';


const QuickDeskLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: 'you@company.com',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await postMethod('/login', {
                email: formData.email,
                password: formData.password
            });

            // Example: Save token in localStorage
            if (response.token) {
                localStorage.setItem('authToken', response.token);
                console.log("Login successful!");
                // Redirect to dashboard or home page
                window.location.href = '/dashboard';
            } else {
                console.warn("No token received.");
            }
        } catch (error) {
            alert("Login failed: " + (error.response?.data?.message || error.message));
        }
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        // bg-slate-900
        <div className="min-h-screen bg-slate-900 rounded-4xl flex relative">
            {/* cross button */}
            <div>
                <button className='cursor-pointer'>
                    <XCircle fontSize={29}
                        className='text-white text-4xl absolute right-10' />
                </button>
            </div>
            {/* Left Side - Branding */}
            <div className="flex-1 flex flex-col justify-center px-12 py-16">
                {/* Logo */}
                <div className="mb-16">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center relative">
                            <Bug className="w-6 h-6 text-white" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">×</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white text-xl font-semibold">QuickDesk</h1>
                            <p className="text-blue-400 text-sm">Bug Smasher</p>
                        </div>
                    </div>
                </div>

                {/* Main Heading */}
                <div className="mb-12">
                    <h2 className="text-white text-5xl font-bold mb-4 leading-tight">
                        Smash Bugs.
                    </h2>
                    <h3 className="text-blue-400 text-5xl font-bold mb-8 leading-tight">
                        Solve Faster.
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        The ultimate help desk solution for streamlined bug tracking and lightning-fast issue resolution.
                    </p>
                </div>

                {/* Features */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-gray-300">Lightning-fast ticket resolution</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Users className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300">Real-time collaboration tools</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                            <Bug className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-gray-300">Advanced bug tracking system</span>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex flex-col justify-center px-12 py-16 relative">

                <div className="max-w-md mx-auto w-full">
                    {/* Form Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-white text-3xl font-bold mb-2">Welcome Back</h2>
                        <p className="text-gray-400">Sign in to your QuickDesk account to continue</p>
                    </div>

                    {/* Login Form */}
                    <div className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-3">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="you@company.com"
                                />
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <div className="w-5 h-5 text-gray-500 flex items-center justify-center">
                                        <span className="text-sm">✉</span>
                                    </div>
                                </div>
                                <style jsx='true'>{`
                  input {
                    padding-left: 2.5rem;
                  }
                `}</style>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-3">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter your password"
                                    style={{ paddingLeft: '2.5rem' }}
                                />
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <div className="w-5 h-5 text-gray-500 flex items-center justify-center">
                                        <span className="text-sm">🔒</span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                        >
                            Sign In
                        </button>
                    </div>

                    {/* Footer Links */}
                    <div className="text-center mt-6">
                        <a href="/ForgetPassword" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                            Forgot your password?
                        </a>
                    </div>

                    <div className="text-center mt-4">
                        <span className="text-gray-400 text-sm">Don't have an account? </span>
                        <a href="/signup" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                            Create account
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default QuickDeskLogin;