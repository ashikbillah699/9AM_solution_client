import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    })
    console.log(users)

    return [users, refetch]
};

export default useUser;