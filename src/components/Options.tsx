import { useState } from 'react';
import { useColor } from './ColorContext';
import { useTimer } from './TimerContext';

type OptionsProps = {
    handleShortBreak: () => void;
    handleLongBreak: () => void;
    handleWork: () => void;
};

function Options({ handleShortBreak, handleLongBreak, handleWork }: OptionsProps) {
    const { activeOption, setActiveOption } = useTimer();
    const { activeColor } = useColor();


    const handleClick = (option: string, handler: () => void) => {
        setActiveOption(option);
        handler();
    };

    return (
        <ul className='flex gap-7 my-5 text-gray-400 rounded-full p-2 min-h-[50px] items-center bg-slate-950'>
            <li className={`py-2 px-4 rounded-full cursor-pointer ${activeOption === 'work' ? 'text-slate-950' : ''}`} onClick={() => handleClick('work', handleWork)} style={{ backgroundColor: activeOption === 'work' ? activeColor : '' }}>Work</li>
            <li className={`py-2 px-4 rounded-full cursor-pointer ${activeOption === 'shortBreak' ? 'text-slate-950' : ''}`} onClick={() => handleClick('shortBreak', handleShortBreak)} style={{ backgroundColor: activeOption === 'shortBreak' ? activeColor : '' }}>Short Break</li>
            <li className={`py-2 px-4 rounded-full cursor-pointer ${activeOption === 'longBreak' ? 'text-slate-950' : ''}`} onClick={() => handleClick('longBreak', handleLongBreak)} style={{ backgroundColor: activeOption === 'longBreak' ? activeColor : '' }}>Long Break</li>
        </ul>
    );
}

export default Options;
