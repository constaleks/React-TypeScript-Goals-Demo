import { useState, type ChangeEvent } from 'react';
import type { Goal as GoalType } from '../types';

interface GoalProps extends GoalType {
    onEdit: (id: string, title: string, description: string) => void;
    onRemove: (id: string) => void;
}

function Goal({ id, title, description, onEdit, onRemove }: GoalProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleState = () => {
        setIsEditing(true);
    };

    const handleEdit = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.nodeName === 'TEXTAREA') {
            setEditedDescription(e.target.value);
        } else {
            setEditedTitle(e.target.value);
        }
    };

    const handleSave = () => {
        if (editedTitle === '') {
            return;
        }
        onEdit(id, editedTitle, editedDescription);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedTitle(title);
        setEditedDescription(description);
        setIsEditing(false);
    };

    const handleRemove = () => {
        onRemove(id);
    };

    if (isEditing) {
        return (
            <div className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 shadow-sm dark:border-slate-600">
                <input
                    type="text"
                    value={editedTitle}
                    onChange={handleEdit}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-500/30"
                />
                <textarea
                    value={editedDescription}
                    onChange={handleEdit}
                    rows={3}
                    className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-500/30"></textarea>
                <div className="flex gap-2">
                    <button
                        onClick={handleSave}
                        className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 cursor-pointer">
                        Save
                    </button>
                    <button
                        onClick={handleCancel}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 cursor-pointer dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                        Cancel
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 rounded-xl border border-slate-200 p-4 shadow-sm dark:border-slate-600">
            <h2 className="font-semibold text-slate-800 dark:text-white">{title}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
            <div className="flex gap-2">
                <button
                    onClick={handleState}
                    className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-100 cursor-pointer dark:bg-indigo-500/20 dark:text-indigo-300 dark:hover:bg-indigo-500/30">
                    Edit
                </button>
                <button
                    onClick={handleRemove}
                    className="rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 cursor-pointer dark:bg-red-500/20 dark:text-red-300 dark:hover:bg-red-500/30">
                    Remove
                </button>
            </div>
        </div>
    );
}

export default Goal;
