import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch(`https://task-flow-server-pearl.vercel.app/users`);
            const data = await res.json();
            return data;
        },
    })
    return [users, ]
};

export default useUser;