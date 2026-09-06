import { useState } from 'react';

interface GoalProps {
    id: string;
    title: string;
    description: string;
    onEdit: (id: string, title: string, description: string) => void;
    onRemove: (id: string) => void;
}

function Goal({ id, title, description, onEdit, onRemove }: GoalProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleSave = () => {
        onEdit(id, editedTitle, editedDescription);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedTitle(title);
        setEditedDescription(description);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div>
                <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)}></textarea>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        );
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onRemove(id)}>Remove</button>
        </div>
    );
}

export default Goal;
