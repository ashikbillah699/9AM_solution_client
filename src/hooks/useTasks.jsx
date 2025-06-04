import { useQuery } from '@tanstack/react-query';

const useTasks = () => {
    const { data: tasks = [],  refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`https://task-flow-server-1jt0xn5sm-ashikbillah699s-projects.vercel.app/tasks`);
            const data = await res.json();
            return data;
        },
    })
    return [tasks, refetch]
};

export default useTasks;