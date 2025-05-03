
import { useContext } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { AuthContext } from '../provider/AuthProvider';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { setShowDashboard, showDashboard } = useContext(AuthContext)

    return (
        <div>
            <div className=" bg-gray-900">
                <div className='navbar container mx-auto'>
                    <div className="flex-none mr-1">
                        <a className="text-white text-2xl">Task <span className='text-[#2e4f96]'>Flow</span></a>
                    </div>
                    <div className="flex-1 ml-24">
                        {showDashboard ? <RxCross1 onClick={() => setShowDashboard(false)} className='text-white w-6 h-6' />
                            : <CiMenuFries onClick={() => setShowDashboard(true)} className='text-white w-6 h-6' />
                        }
                    </div>
                    <div className="flex-none">
                        <Link to='/login'><button className="btn btn-sm">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;