import { useQuery } from '@tanstack/react-query';

const useTasks = () => {
    const { data: tasks = [],  refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`https://task-flow-server-pearl.vercel.app/tasks`);
            const data = await res.json();
            return data;
        },
    })
    return [tasks, refetch]
};

export default useTasks;