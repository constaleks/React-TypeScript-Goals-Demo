import type { Goal as GoalType } from '../types';
import Goal from './Goal';
import InfoBox from './InfoBox';

interface GoalsListProps {
    goals: GoalType[];
    editGoal: (id: string, title: string, description: string) => void;
    removeGoal: (id: string) => void;
}

function GoalsList({ goals, editGoal, removeGoal }: GoalsListProps) {
    if (goals.length === 0) {
        return <InfoBox mode="hint">You have no added goals yet.</InfoBox>;
    }

    return (
        <>
            {goals.length >= 4 ? <InfoBox mode="warning">You have added maximum amount of goals.</InfoBox> : ''}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
        </>
    );
}

export default GoalsList;
