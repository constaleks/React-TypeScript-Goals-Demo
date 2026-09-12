import { type ReactNode } from 'react';

interface InfoBoxProps {
    mode: 'hint' | 'warning';
    children: ReactNode;
}

function InfoBox({ mode, children }: InfoBoxProps) {
    if (mode === 'hint') {
        return (
            <div className="bg-blue-200 rounded-lg py-2">
                <p className="text-center">{children}</p>
            </div>
        );
    }

    return (
        <div className="bg-yellow-200 rounded-lg py-2">
            <h2 className="text-center font-semibold">Warning</h2>
            <p className="text-center">{children}</p>
        </div>
    );
}

export default InfoBox;
