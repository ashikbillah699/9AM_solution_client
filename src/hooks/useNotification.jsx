import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useNotification = () => {
    const { user } = useContext(AuthContext);

    const { data: notifications = [], refetch } = useQuery({
        queryKey: ['notifications', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://task-flow-server-1jt0xn5sm-ashikbillah699s-projects.vercel.app/notifications?email=${user.email}`);
            return res.json();
        },
    });
    return [notifications, refetch];
};

export default useNotification;