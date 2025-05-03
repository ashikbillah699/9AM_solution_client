import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Dashboard = () => {
    const { showDashboard } = useContext(AuthContext)
    return (
        <div>
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Sidebar */}
                <div className={`w-full bg-[#D1A054] text-black  transition-all duration-700 overflow-hidden flex-shrink-0
                     ${showDashboard ? "md:w-1/5 p-8" : "md:w-20 p-2"} 
                     `}>
                    
                    {showDashboard ? <>
                        <ul className="flex flex-col space-y-5">
                            <li><NavLink to='/deshboard/admin' className="hover:text-white duration-300 font-bold flex items-center gap-3">  Admin Home</NavLink></li>
                            <li><NavLink to='/deshboard/addItems' className="hover:text-white duration-300 font-bold flex items-center gap-3">Add Items</NavLink></li>
                            <li> <NavLink to='/deshboard/manageItems' className="hover:text-white duration-300 flex font-bold items-center gap-3">Manage Items</NavLink></li>
                            <li><NavLink to='/deshboard/manageBooking' className="hover:text-white duration-300 font-bold flex items-center gap-3">Manage Bookings</NavLink></li>
                            <li><NavLink to='/deshboard/allUsers' className="hover:text-white duration-300 font-bold flex items-center gap-3">All Users</NavLink></li>
                        </ul>
                    </>
                        : <>

                        </>
                    }

                </div>

                {/* Main Content */}
                <div className={`w-full   rounded
                     ${showDashboard ? "md:w-4/5 px-6" : "md:w-full px-6"} 
                    `}>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;