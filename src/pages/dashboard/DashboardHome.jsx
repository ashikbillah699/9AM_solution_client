import React, { useContext } from 'react';
import { FcOvertime } from 'react-icons/fc';
import { IoIosCreate } from 'react-icons/io';
import { MdAssignment } from 'react-icons/md';
import { AuthContext } from '../../provider/AuthProvider';
import useTasks from '../../hooks/useTasks';

const DashboardHome = () => {
    const {user} = useContext(AuthContext)
    const [tasks] = useTasks()

    const createdTask = tasks.filter(task => task.userEmail == user?.email);
    const assignedTask = tasks.filter(task => task.assignedEmail == user?.email)
    const todayDate = new Date()
    const dueDate = tasks.filter(date => new Date(date.dueDate)< todayDate && date.assignedEmail == user?.email)
    console.log(dueDate)

    return (
        <div className='md:flex gap-6'>
            <button className='bg-gray-900 text-white py-12 px-24'><MdAssignment className='mx-auto w-20 h-16'/>{assignedTask.length} Assigned Tasks</button>
            <button className='bg-gray-900 text-white py-12 px-24'><IoIosCreate className='mx-auto w-20 h-16'/>{createdTask.length} Created Tasks</button>
            <button className='bg-gray-900 text-white py-12 px-24'><FcOvertime className='mx-auto w-20 h-16'/>{dueDate.length} Overdue Tasks</button>
        </div>
    );
};

export default DashboardHome;