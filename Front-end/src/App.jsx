import { useState } from 'react'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import {
  CreateTicket,
  Login,
  Dashboard,
  UserProfile,
  Signup,
  Home,
  ForgetPassword
} from './components/index.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/user-profile" element={<UserProfile />} />
        {/* {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route path="/my-tickets" element={<MyTickets />} /> */}
        {/* <Route path="/ticket/:id" element={<TicketDetails />} /> */}
      </Route>
    </Routes>
  )
}

export default App
