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
        if (title === '') {
            return;
        }
        addGoal(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={title}
                className="rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/30"
            />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={description}
                rows={3}
                className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/30"></textarea>
            <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-700 cursor-pointer">
                Add
            </button>
        </form>
    );
}

export default GoalsForm;
