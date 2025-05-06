import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { AiFillDashboard } from 'react-icons/ai';
import { IoIosCreate, IoIosNotifications } from 'react-icons/io';
import { MdAssignment } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';
import { RiLogoutCircleFill } from 'react-icons/ri';

const Dashboard = () => {
    const { showDashboard, createLogOut, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        createLogOut();
        navigate('/')
    }

    return (
        <div>
            <div className="md:flex flex-col md:flex-row min-h-screen">
                {/* Sidebar */}
                <div className={`w-full bg-gray-800 text-black  transition-all duration-700 overflow-hidden flex-shrink-0
             ${showDashboard ? "md:w-2/6 md:px-6 lg:w-1/6 lg:px-8" : "md:w-14 lg:w-14 px-3"}`}>
                    {
                        showDashboard &&
                        <div>
                            <img className='border border-white rounded-full w-24 h-24 mx-auto mt-6' src={`${user?.photoURL}`} alt="" />
                            <p className='text-center text-white font-bold mt-1'>{user?.displayName}</p>
                        </div>
                    }
                    <ul className=" flex flex-col space-y-8 md:justify-start md:items-start items-center md:sticky top-44 py-5">
                        <li>
                            <NavLink to='dashboardHome'
                                className="text-xl hover:text-[#21587a] text-white duration-300 flex items-center justify-start gap-3">
                                <span className="min-w-[32px] flex justify-center">
                                    <AiFillDashboard className='w-8 h-8' />
                                </span>
                                <span className="whitespace-nowrap md:inline-block">{showDashboard && "Dashboard"}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='createTask'
                                className="text-xl hover:text-[#21587a] text-white duration-300 flex items-center justify-start gap-3">
                                <span className="min-w-[32px] flex justify-center">
                                    <IoIosCreate className='w-8 h-8' />
                                </span>
                                <span className="whitespace-nowrap md:inline-block">{showDashboard && "Create Task"}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='notifications'
                                className="text-xl hover:text-[#21587a] text-white duration-300 flex items-center justify-start gap-3">
                                <span className="min-w-[32px] flex justify-center">
                                    <IoIosNotifications className='w-8 h-8' />
                                </span>
                                <span className="whitespace-nowrap md:inline-block">{showDashboard && "Notification"}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleLogout}
                                className="text-xl hover:text-[#21587a] text-white duration-300 flex items-center justify-start gap-3">
                                <span className="min-w-[32px] flex justify-center">
                                    <RiLogoutCircleFill className='w-8 h-8' />
                                </span>
                                <span className="whitespace-nowrap md:inline-block">{showDashboard && "logOut"}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className={`w-full rounded ${showDashboard ? "lg:w-5/6 p-6" : "lg:w-full p-6"}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;