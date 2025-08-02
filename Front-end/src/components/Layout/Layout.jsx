import React from 'react'
import { Header, Footer } from './index.js'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header />
            <div className='flex-col grow'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
