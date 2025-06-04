import React, { useContext, useEffect, useState } from 'react';
import useTasks from '../../../hooks/useTasks';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreatedTasks = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [tasks, refetch] = useTasks()
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [dueDateFilter, setDueDateFilter] = useState('');

    const createdtask = tasks.filter(task =>
        task.userEmail === user?.email &&
        (task?.title || "").toLowerCase().includes(searchTerm.toLowerCase()) &&
        (statusFilter ? task.status === statusFilter : true) &&
        (priorityFilter ? task.priority === priorityFilter : true) &&
        (dueDateFilter ? new Date(task.dueDate).toLocaleDateString() === new Date(dueDateFilter).toLocaleDateString() : true)
    );

    // Task update
    const handleEdit = (task) => {
        navigate('/mainLayout/editTask', { state: { task } })
    }

    // task delete
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await fetch(`https://task-flow-server-pearl.vercel.app/task/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                    refetch()
                }
                catch (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${err.message}`
                    });
                }
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div className="overflow-x-auto w-full">
            <h1 className='text-2xl mb-3 font-bold'>Created Tasks</h1>
            {/* Filters */}
            <div className="flex gap-4 mb-4">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
                <select
                    className="input input-bordered"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">All Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                </select>

                <select
                    className="input input-bordered"
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                >
                    <option value="">All Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <input
                    type="date"
                    className="input input-bordered"
                    value={dueDateFilter}
                    onChange={(e) => setDueDateFilter(e.target.value)}
                />
            </div>

            {/* Table */}
            <table className="table table-zebra w-full">
                {/* Table Head */}
                <thead className="bg-base-200">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    {createdtask.map((task, index) => (
                        <tr key={task._id}>
                            <th>{index + 1}</th>
                            <td className="max-w-[150px] break-words">{task.title}</td>
                            <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                            <td><span>{task.priority}</span></td>
                            <td><span>{task.status}</span></td>
                            <td className="flex gap-2 justify-center">
                                <button
                                    onClick={() => handleEdit(task)}
                                    className="btn btn-sm btn-warning"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(task._id)}
                                    className="btn btn-sm btn-error"
                                >
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {createdtask.length === 0 && (
                <p className="text-center text-gray-400 py-4">No tasks available.</p>
            )}
        </div>
    );
};

export default CreatedTasks;
