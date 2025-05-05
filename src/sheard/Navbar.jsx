
import { useContext } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { AuthContext } from '../provider/AuthProvider';
import { RxCross1 } from 'react-icons/rx';
import { IoIosNotifications } from 'react-icons/io';

const Navbar = () => {
    const { setShowDashboard, showDashboard } = useContext(AuthContext)

    return (
        <div>
            <div className=" bg-gray-900">
                <div className='navbar container mx-auto'>
                    <div className="flex-none">
                        <a className="text-white text-2xl font-extrabold mr-8 md-mr-2">Task <span className='text-[#21587a]'>Flow</span></a>
                    </div>
                    <div className=" flex-1 lg:ml-16 md:ml-24 hidden md:block">
                        {showDashboard ? <RxCross1 onClick={() => setShowDashboard(false)} className='text-white w-6 h-6' />
                            : <CiMenuFries onClick={() => setShowDashboard(true)} className='text-white w-6 h-6' />
                        }
                    </div>
                    <div className="flex-none mt-2">
                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary">99+</span>
                        <IoIosNotifications className='text-white h-9 w-9' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;