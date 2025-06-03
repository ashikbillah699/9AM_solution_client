import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import Swal from 'sweetalert2';

const EditTask = () => {
    const location = useLocation();
    const { task } = location.state || {};
    const [users] = useUser();
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const dueDate = form.dueDate.value;
        const priority = form.priority.value;
        const status = form.status.value;
        const assignedEmail = form.assignedEmail.value
        const userEmail = task.userEmail
        const updatedTaskData = { title, description, dueDate, priority, status, assignedEmail, userEmail };

        try {
            const response = await fetch(`http://localhost:5000/task/${task._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTaskData),
            });

            const data = await response.json();
            if (data.modifiedCount) {
                Swal.fire({
                    title: "Task updated Successfully!",
                    icon: "success",
                    text: "Your task has been updated to the list.",
                    draggable: true
                });
                form.reset();
                navigate('/mainLayout/createdTasks')
            }
        }
        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`
            });
        }
    }

    return (
        <div className="max-w-md mx-auto p-4 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">Update Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    defaultValue={task.title}
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    className="input input-bordered w-full"
                    required
                />

                <textarea
                    defaultValue={task.description}
                    name="description"
                    placeholder="Task Description"
                    className="textarea textarea-bordered w-full"
                    required
                ></textarea>

                <input
                    defaultValue={task.dueDate}
                    type="date"
                    name="dueDate"
                    className="input input-bordered w-full"
                    required
                />

                <select name="priority" className="select select-bordered w-full" defaultValue={task.priority} required>
                    <option value="" disabled>Set Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select name="status" className="select select-bordered w-full" defaultValue={task.status} required>
                    <option value="" disabled>Set Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </select>
                <select name="assignedEmail" className="select select-bordered w-full" defaultValue={task.assignedEmail} required>
                    <option value="" disabled selected>Assigned email</option>
                    {
                        users.map(assignedUser => <option key={assignedUser._id} value={`${assignedUser?.email}`}>
                            {assignedUser.email}
                        </option>)
                    }
                </select>
                <button type="submit" className="btn btn-primary w-full">Update Task</button>
            </form>
        </div>
    );
};

export default EditTask;