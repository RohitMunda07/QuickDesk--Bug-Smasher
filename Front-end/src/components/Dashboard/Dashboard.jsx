import React, { useState } from 'react';
import { Search, Bell, Clock, RotateCcw, CheckCircle, Plus, ArrowRight, Info } from 'lucide-react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bellAnimation, setBellAnimation] = useState(false);

  const tickets = [
    {
      id: '#TK-001',
      status: 'open',
      priority: 'medium',
      title: 'Coffee machine not working in break room',
      description: 'The coffee machine on the 3rd floor is not dispensing coffee properly.',
      category: 'Facilities',
      created: 'Jan 15, 2024'
    },
    {
      id: '#TK-002',
      status: 'progress',
      priority: 'high',
      title: 'Laptop screen flickering issue',
      description: 'My laptop screen has been flickering intermittently during meetings.',
      category: 'IT Support',
      created: 'Jan 14, 2024'
    },
    {
      id: '#TK-003',
      status: 'resolved',
      priority: 'low',
      title: 'Request for additional monitor',
      description: 'Need an additional monitor for improved productivity.',
      category: 'Equipment',
      created: 'Jan 12, 2024'
    }
  ];

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBellClick = () => {
    setBellAnimation(true);
    setTimeout(() => setBellAnimation(false), 500);
  };

  const handleCreateTicket = () => {
    alert('Create New Ticket modal would open here!');
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      open: 'bg-orange-500 text-white',
      progress: 'bg-blue-500 text-white',
      resolved: 'bg-green-500 text-white'
    };

    const statusText = {
      open: 'open',
      progress: 'in progress',
      resolved: 'resolved'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {statusText[status]}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const priorityStyles = {
      low: 'bg-green-100 text-green-700',
      medium: 'bg-yellow-400 text-white',
      high: 'bg-red-500 text-white'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityStyles[priority]}`}>
        {priority}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F4FF] p-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 flex justify-between items-center mb-6">
        <div className="text-xl font-bold text-indigo-600 flex items-center gap-2">
          <span className="text-2xl">🎟</span> SupportHub
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-indigo-50 outline-none"
            />
          </div>
          {/* Bell Icon */}
          <Bell
            className={`w-5 h-5 text-gray-600 cursor-pointer hover:scale-110 transition ${bellAnimation ? 'animate-bounce' : ''}`}
            onClick={handleBellClick}
          />
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">A</div>
          <span className="hidden sm:block font-medium text-gray-700">Avinash</span>
        </div>
      </div>

      {/* Welcome */}
      <div className="bg-indigo-50 rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1 flex items-center gap-2">Hi Avinash 👋</h1>
        <p className="text-gray-600">Welcome back to your support dashboard. Here's what's happening with your tickets.</p>
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-rose-600 flex items-center gap-2 mb-4">📢 Announcements</h2>
        <div className="bg-indigo-50 p-4 rounded-lg flex gap-3">
          <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center">
            <Info className="text-blue-600 w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">System Maintenance Scheduled</h3>
            <p className="text-sm text-gray-600">Our ticketing system will undergo maintenance this Sunday from 2-4 AM.</p>
          </div>
        </div>
      </div>

      {/* Stats + CTA */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-stretch">
        <div className="bg-white rounded-xl p-5 flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">Open Tickets</span>
            <h3 className="text-3xl font-bold text-gray-800">1</h3>
          </div>
          <Clock className="w-6 h-6 text-orange-500" />
        </div>
        <div className="bg-white rounded-xl p-5 flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">In Progress</span>
            <h3 className="text-3xl font-bold text-gray-800">1</h3>
          </div>
          <RotateCcw className="w-6 h-6 text-blue-500" />
        </div>
        <div className="bg-white rounded-xl p-5 flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">Resolved</span>
            <h3 className="text-3xl font-bold text-gray-800">1</h3>
          </div>
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>
        <div className="bg-indigo-600 rounded-xl p-5 text-white flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Need Help?</span>
            <span className="text-3xl">📋</span>
          </div>
          <button
            onClick={handleCreateTicket}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 w-full"
          >
            <Plus className="inline w-4 h-4 mr-2" /> Create New Ticket
          </button>
        </div>
      </div>

      {/* Recent Tickets */}
      <div className="bg-indigo-50 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Recent Tickets</h2>
          <button className="flex items-center gap-1 text-indigo-600 font-medium hover:underline">
            View All Tickets <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {filteredTickets.map(ticket => (
            <div key={ticket.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-2 items-center text-sm">
                  <span className="font-medium text-gray-600">{ticket.id}</span>
                  {getStatusBadge(ticket.status)}
                  {getPriorityBadge(ticket.priority)}
                </div>
                <button className="bg-indigo-50 text-gray-600 text-sm px-3 py-1 rounded-lg hover:bg-white">
                  View Details
                </button>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{ticket.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{ticket.description}</p>
              <div className="text-xs text-gray-400 flex justify-between">
                <span>Category: {ticket.category}</span>
                <span>Created: {ticket.created}</span>
              </div>
            </div>
          ))}
        </div>
        {filteredTickets.length === 0 && (
          <div className="text-center text-gray-500 py-6">No tickets found matching "{searchTerm}"</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
