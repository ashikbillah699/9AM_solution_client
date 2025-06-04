
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { RxCross1 } from 'react-icons/rx';
import { IoIosNotifications } from 'react-icons/io';
import useNotification from '../hooks/useNotification';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { setShowDashboard, showDashboard, user } = useContext(AuthContext)
    const [notifications,refetch] = useNotification();
    const unreadNotifications = notifications.filter(notification => !notification.isRead);
    refetch()
    return (
        <div>
            <div className=" bg-gray-900">
                <div className='navbar container mx-auto'>
                    <div className="flex-none">
                        <a className="text-white text-2xl font-extrabold mr-8 md-mr-2">Task <span className='text-[#21587a]'>Flow</span></a>
                    </div>
                    <div className=" flex-1 lg:ml-16 md:ml-24 hidden md:block">
                        {showDashboard ? <RxCross1 onClick={() => setShowDashboard(false)} className='text-white w-7 h-7 rounded-full' />
                            : <img src={`${user?.photoURL}`} onClick={() => setShowDashboard(true)} className='text-white w-9 h-9 rounded-full' />
                        }
                    </div>
                    <div className="flex-none mt-2">
                        <div className="indicator">
                            <Link to="/mainLayout/notifications" className="relative">
                                {unreadNotifications.length > 0 && (
                                    <span className="indicator-item badge badge-secondary">
                                        {unreadNotifications.length}
                                    </span>
                                )}
                                <IoIosNotifications className="text-white h-9 w-9" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;