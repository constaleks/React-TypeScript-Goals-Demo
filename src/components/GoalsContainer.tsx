import useGoalState from '../hooks/useGoalState';

import GoalsForm from './GoalsForm';
import GoalsList from './GoalsList';

function GoalsContainer() {
    const { goals, addGoal, editGoal, removeGoal } = useGoalState();

    return (
        <div>
            <GoalsForm addGoal={addGoal} />
            <GoalsList goals={goals} editGoal={editGoal} removeGoal={removeGoal} />
        </div>
    );
}

export default GoalsContainer;
