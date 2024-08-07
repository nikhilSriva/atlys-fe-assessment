import {RefObject, useEffect} from 'react';

type UseClickOutsideCallback = (event: MouseEvent) => void;

export const useClickOutside = (ref: RefObject<HTMLElement>, callback: UseClickOutsideCallback) => {
    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback(e);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [ref, callback]); // Added dependencies to avoid unnecessary effect reruns
};
