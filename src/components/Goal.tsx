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
            <div>
                <input type="text" value={editedTitle} onChange={handleEdit} />
                <textarea value={editedDescription} onChange={handleEdit}></textarea>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        );
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleState}>Edit</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}

export default Goal;
