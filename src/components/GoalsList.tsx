import type { Goal as GoalType } from '../types';
import Goal from './Goal';

interface GoalsListProps {
    goals: GoalType[];
    editGoal: (id: string, title: string, description: string) => void;
    removeGoal: (id: string) => void;
}

function GoalsList({ goals, editGoal, removeGoal }: GoalsListProps) {
    return (
        <div className="space-y-3 max-h-[50vh] overflow-y-auto">
            {goals.map((goal) => (
                <Goal
                    key={goal.id}
                    id={goal.id}
                    title={goal.title}
                    description={goal.description}
                    onEdit={editGoal}
                    onRemove={removeGoal}
                />
            ))}
        </div>
    );
}

export default GoalsList;
