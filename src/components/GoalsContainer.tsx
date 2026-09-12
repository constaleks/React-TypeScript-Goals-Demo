import useGoalState from '../hooks/useGoalState';

import GoalsForm from './GoalsForm';
import GoalsList from './GoalsList';

function GoalsContainer() {
    const { goals, addGoal, editGoal, removeGoal } = useGoalState();

    return (
        <div className="w-full max-w-2xl max-h-[90vh] space-y-6 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm dark:bg-slate-800/90 sm:p-8">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Goals</h1>
            <GoalsForm addGoal={addGoal} goalsCount={goals.length} />
            <GoalsList goals={goals} editGoal={editGoal} removeGoal={removeGoal} />
        </div>
    );
}

export default GoalsContainer;
