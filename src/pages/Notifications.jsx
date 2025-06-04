import useNotification from '../hooks/useNotification';
import { FaBell } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Notifications = () => {
    const [notifications, refetch] = useNotification();

    const handleClick = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/notification/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ isRead: true }),
            });
            await response.json();
            refetch()
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
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notifications.map((notification, idx) => {
                const { receiverEmail, message, createdAt, isRead } = notification;
                return (
                    <div
                        onClick={() => handleClick(notification._id)}
                        key={idx}
                        className={`card w-full shadow-xl border ${isRead ? 'bg-gray-100' : 'bg-white'} transition-all`}
                    >
                        <div className="card-body flex flex-row items-start gap-4">
                            <div className="text-2xl text-primary">
                                <FaBell />
                            </div>
                            <div className="flex-1">
                                <h2 className="card-title text-sm text-gray-600">{receiverEmail}</h2>
                                <p className="text-base font-medium">{message}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {new Date(createdAt).toLocaleString()}
                                </p>
                            </div>
                            {!isRead && <div className="badge badge-primary badge-sm mt-1">New</div>}
                        </div>
                    </div>
                );
            })}
            {notifications.length == 0 && <div className=" mx-auto text-bold text-gray-400 text-2xl">You have no notifications.</div>}
        </div>
    );
};

export default Notifications;