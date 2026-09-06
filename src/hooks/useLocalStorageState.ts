import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';

function useLocalStorageState<T>(key: string, initialVal: T): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        const stored = localStorage.getItem(key);
        if (stored === null) return initialVal;

        try {
            return JSON.parse(stored) as T;
        } catch (e) {
            console.warn(e);
            return initialVal;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}

export default useLocalStorageState;
