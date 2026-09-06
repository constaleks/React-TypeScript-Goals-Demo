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

/*


        removeTodo: (id) => {
            setList((prevList) => prevList.filter((item) => item.id !== id));
        },
        toggleTodo: (id) => {
            setList((prevList) => prevList.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
        },
        editTodo: (id, newValue) => {
            setList((prevList) => prevList.map((item) => (item.id === id ? { ...item, todo: newValue } : item)));
        },

*/
