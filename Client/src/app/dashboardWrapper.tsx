import React from 'react'
import Navebar from './(components)/Navbar';

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex bg-gray-50 text-gray-50 w-full min-h-screen'>
            SideBar
            <main className='flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24'>
                <Navebar />
                {children}
            </main>
        </div>
    )
}

export default DashboardWrapper;