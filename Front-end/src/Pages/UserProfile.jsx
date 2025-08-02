import React from "react";

const ProfileCard = () => {
  return (
    <div className="min-h-screen bg-[#0e0f11] flex flex-col items-center justify-start py-10 px-4">
      {/* Top Navigation */}
      <div className="flex gap-4 mb-10">
        <button className="bg-[#1c2736] text-white px-6 py-2 rounded-full">DashBoard</button>
        <button className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md">Admin</button>
      </div>

      {/* Profile Card */}
      <div className="bg-[#111c2e] text-white w-full max-w-4xl rounded-2xl p-10 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-8">Profile</h2>

        {/* Profile Form Fields */}
        <div className="flex flex-col gap-8">
          <div>
            <label className="block mb-1 text-gray-300">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="w-full">
              <label className="block mb-1 text-gray-300">Role:</label>
              <input
                type="text"
                placeholder="User/Admin"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2"
              />
            </div>
            <button className="ml-4 bg-green-500 text-white font-semibold px-5 py-2 rounded-md shadow-md">
              Upgrade
            </button>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Category in Interest:</label>
            <input
              type="text"
              placeholder="e.g. Tech, Education"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Change Language:</label>
            <select className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white">
              <option className="bg-black text-white">English</option>
              <option className="bg-black text-white">Hindi</option>
              <option className="bg-black text-white">Spanish</option>
            </select>
          </div>
        </div>

        {/* Profile Image Circle */}
        <div className="absolute top-10 right-10">
          <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-center shadow-lg">
            Profile Image
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
