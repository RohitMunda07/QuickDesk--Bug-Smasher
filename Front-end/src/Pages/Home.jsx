import React from "react";

const QuestionCard = () => {
    return (
        <div className="bg-[#1c1c1e] text-white p-4 rounded-xl border border-[#2c2c2e] mb-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-1">
                Is it good thingss to use AI for hackathon?
            </h2>
            <div className="flex items-center text-sm text-gray-400 mb-2">
                <span className="mr-2">1</span>
                <span className="mr-4">0</span>
                <span className="bg-green-900 text-green-300 px-2 py-0.5 rounded-full text-xs mr-2">
                    Technical
                </span>
                <span className="bg-green-900 text-green-300 px-2 py-0.5 rounded-full text-xs">
                    AI
                </span>
            </div>
            <p className="text-xs text-green-400 mb-2">Posted by odoo IN pvt. ltd.</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-orange-400">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-1"></span> Open
                </div>
                <div className="bg-green-800 text-green-200 px-3 py-1 rounded-md text-sm font-semibold">
                    21
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="min-h-screen bg-[#121212] p-6">
            {/* Header Controls */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <label className="text-white flex items-center gap-2">
                        <input type="checkbox" className="accent-green-500" />
                        Show open only
                    </label>
                    <select className="bg-[#1e1e1e] text-white border border-[#2c2c2e] px-4 py-2 rounded-md">
                        <option>Categories</option>
                    </select>
                    <select className="bg-[#1e1e1e] text-white border border-[#2c2c2e] px-4 py-2 rounded-md">
                        <option>Status</option>
                    </select>
                    <button className="bg-green-900 text-green-300 px-4 py-2 rounded-md hover:bg-green-800">
                        Ask
                    </button>
                </div>
                <button className="text-white px-4 py-2 bg-[#2c2c2e] rounded-md">
                    Dashboard
                </button>
            </div>

            {/* Search */}
            <input
                type="text"
                placeholder="Search"
                className="w-full mb-6 px-4 py-2 bg-[#1e1e1e] text-white border border-[#2c2c2e] rounded-md"
            />

            {/* Questions */}
            {[1, 2, 3].map((_, i) => (
                <QuestionCard key={i} />
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center text-white gap-3 mt-6">
                {[1, 2, 3, 4, 5].map((num) => (
                    <button
                        key={num}
                        className="px-3 py-1 bg-[#2c2c2e] hover:bg-[#3c3c3e] rounded-md"
                    >
                        {num}
                    </button>
                ))}
                <span className="text-gray-500">...</span>
                <button className="px-3 py-1 bg-[#2c2c2e] rounded-md">11</button>
                <button className="px-3 py-1 text-gray-400 hover:text-white">›</button>
            </div>
        </div>
    );
};

export default Home;
