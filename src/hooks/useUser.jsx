import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
            const data = await res.json();
            return data;
        },
    })
    return [users, ]
};

export default useUser;