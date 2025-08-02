import { useState } from 'react'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Auth/Login'
import ResetPassword from './components/Auth/ForgetPassword'
import Dashboard from './components/Dashboard/Dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/ForgetPassword" element={<ResetPassword />} />
        {/*<Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/ticket/:id" element={<TicketDetails />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  )
}

export default App
