import { useState } from 'react';
import type { Goal } from '../types';

function useGoalState() {
    const [goals, setGoals] = useState<Goal[]>([]);

    return {
        goals,
        addGoal: (title: string, description: string) => {
            setGoals((prevGoals) => [...prevGoals, { id: crypto.randomUUID(), title, description }]);
        },
        editGoal: (id: string, newTitle: string, newDescription: string) => {
            setGoals((prevGoals) =>
                prevGoals.map((item) => (item.id === id ? { ...item, title: newTitle, description: newDescription } : item)),
            );
        },
        removeGoal: (id: string) => {
            setGoals((prevGoals) => prevGoals.filter((item) => item.id !== id));
        },
    };
}

export default useGoalState;
