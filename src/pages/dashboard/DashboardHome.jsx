import React, { useContext } from 'react';
import { FcOvertime } from 'react-icons/fc';
import { IoIosCreate } from 'react-icons/io';
import { MdAssignment } from 'react-icons/md';
import { AuthContext } from '../../provider/AuthProvider';
import useTasks from '../../hooks/useTasks';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    const {user} = useContext(AuthContext)
    const [tasks] = useTasks()

    const createdtask = tasks.filter(task => task.userEmail == user?.email);
    const assignedTask = tasks.filter(task => task.assignedEmail == user?.email)
    const todayDate = new Date()
    const dueDate = tasks.filter(date => new Date(date.dueDate)< todayDate && date.assignedEmail == user?.email)

    return (
        <div className='md:grid grid-cols-3 gap-6 space-y-6 md:space-y-0'>
            <Link to="/mainLayout/assignedTasks"><button  className='bg-gray-900 text-white py-8 w-full mx-auto'><MdAssignment className='mx-auto w-20 h-16'/>{assignedTask.length} Assigned Tasks</button></Link>
            <Link to="/mainLayout/createdtasks"><button  createdtask={createdtask} className='bg-gray-900 text-white py-8 w-full mx-auto'><IoIosCreate className='mx-auto w-20 h-16'/>{createdtask.length} Created Tasks</button></Link>
            <Link to="/mainLayout/overdueTasks"><button className='bg-gray-900 text-white py-8 w-full mx-auto'><FcOvertime className='mx-auto w-20 h-16'/>{dueDate.length} Overdue Tasks</button></Link>
        </div>
    );
};

export default DashboardHome;