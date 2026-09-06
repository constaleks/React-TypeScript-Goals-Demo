import { useState, type ChangeEvent, type SubmitEvent } from 'react';

interface GoalsFormProps {
    addGoal: (title: string, description: string) => void;
}

function GoalsForm({ addGoal }: GoalsFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.nodeName === 'TEXTAREA') {
            setDescription(e.target.value);
        } else {
            setTitle(e.target.value);
        }
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        addGoal(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} value={title} />
            <textarea name="description" onChange={handleChange} value={description}></textarea>
            <button type="submit">Add</button>
        </form>
    );
}

export default GoalsForm;
