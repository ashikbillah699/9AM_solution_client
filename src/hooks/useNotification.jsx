import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useNotification = () => {
    const { user } = useContext(AuthContext);

    const { data: notifications = [], refetch } = useQuery({
        queryKey: ['notifications', user?.email],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/notifications?email=${user.email}`);
            return res.json();
        },
    });
    return [notifications, refetch];
};

export default useNotification;