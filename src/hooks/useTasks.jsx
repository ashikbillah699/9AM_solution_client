import { useQuery } from '@tanstack/react-query';

const useTasks = () => {
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/tasks`);
            const data = await res.json();
            return data;
        }
    })
    return [tasks, refetch]
};

export default useTasks;