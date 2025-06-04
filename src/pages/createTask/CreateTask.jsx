import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const { user } = useContext(AuthContext);
    const [users] = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submitted");
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const dueDate = form.dueDate.value;
        const priority = form.priority.value;
        const status = form.status.value;
        const assignedEmail = form.assignedEmail.value
        const userEmail = user?.email
        const taskData = { title, description, dueDate, priority, status, assignedEmail, userEmail };

        try {
            const res = await fetch(`https://task-flow-server-pearl.vercel.app/task`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(taskData)
            })
            const data = await res.json();
            console.log( data)

            if (data.acknowledged) {
                Swal.fire({
                    title: "Task Submitted Successfully!",
                    icon: "success",
                    text: "Your task has been added to the list.",
                    draggable: true
                });
                form.reset();
                navigate('/mainLayout/createdTasks')

                // send Notification
                const notificationData = {
                    assignedEmail,
                    title
                  };

                await fetch(`http://localhost:5000/notifications/${user?.email}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(notificationData), 
                  });
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
            <h2 className="text-2xl font-semibold mb-4 text-center">Create New Task</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    className="input input-bordered w-full"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Task Description"
                    className="textarea textarea-bordered w-full"
                    required
                ></textarea>

                <input
                    type="date"
                    name="dueDate"
                    className="input input-bordered w-full"
                    required
                />

                <select name="priority" className="select select-bordered w-full" defaultValue="" required>
                    <option value="" disabled>Set Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select name="status" className="select select-bordered w-full" defaultValue="" required>
                    <option value="" disabled>Set Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </select>
                <select name="assignedEmail" className="select select-bordered w-full" defaultValue="" required>
                    <option value="" disabled selected>Assigned email</option>
                    {
                        users.map(assignedUser => <option key={assignedUser._id} value={`${assignedUser?.email}`}>
                            {assignedUser.email}
                        </option>)
                    }
                </select>
                <button type="submit" className="btn btn-primary w-full">Create Task</button>
            </form>
        </div>
    );
};

export default CreateTask;