import Navbar from '../sheard/Navbar';
import Dashboard from '../sheard/Dashboard';

const MainLayout = () => {
    
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Dashboard></Dashboard>
            </div>
        </div>
    );
};

export default MainLayout;