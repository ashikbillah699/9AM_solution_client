import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useTasks from '../../../hooks/useTasks';

const OverdueTasks = () => {
    const {user} = useContext(AuthContext)
        const [tasks] = useTasks()
    
        const todayDate = new Date()
        const dueDate = tasks.filter(date => new Date(date.dueDate)< todayDate && date.assignedEmail == user?.email)
        console.log(dueDate)
    return (
        <div className="overflow-x-auto w-full">
                    <h1 className='text-2xl mb-3 font-bold'>Created Tasks</h1>
                    <table className="table table-zebra w-full">
                        {/* Table Head */}
                        <thead className="bg-base-200">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                                <th>Priority</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {dueDate.map((task, index) => (
                                <tr key={task._id}>
                                    <th>{index + 1}</th>
                                    <td className="max-w-[150px] break-words">{task.title}</td>
                                    <td className="max-w-[200px] break-words">{task.description}</td>
                                    <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                                    <td> <span>{task.priority} </span> </td>
                                    <td> <span >{task.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        
                    {tasks.length === 0 && (
                        <p className="text-center text-gray-400 py-4">No tasks available.</p>
                    )}
                </div>
    );
};

export default OverdueTasks;