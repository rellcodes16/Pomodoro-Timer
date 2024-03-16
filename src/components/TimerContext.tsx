import React, { createContext, useContext, useState } from 'react';

type TimerContextType = {
    activeOption: string;
    setActiveOption: (option: string) => void;
    workTime: number;
    setWorkTime: (time: number) => void;
    shortBreak: number;
    setShortBreak: (time: number) => void;
    longBreak: number;
    setLongBreak: (time: number) => void;
    displayTime: number;
    setDisplayTime: (time: number) => void;
    workTimeInput: number;
    setWorkTimeInput: (time: number) => void;
    shortBreakInput: number;
    setShortBreakInput: (time: number) => void;
    longBreakInput: number;
    setLongBreakInput: (time: number) => void;

};

const TimerContext = createContext<TimerContextType | undefined>(undefined);


const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeOption, setActiveOption] = useState<string>('work');

    const [workTime, setWorkTime] = useState(25 * 60);
    const [shortBreak, setShortBreak] = useState(5 * 60); 
    const [longBreak, setLongBreak] = useState(15 * 60); 
    const [displayTime, setDisplayTime] = useState(workTime);

    const formattedWorkTime = workTime / 60;
    const formattedShortBreak = shortBreak / 60;
    const formattedLongBreak = longBreak / 60;
    
    const [workTimeInput, setWorkTimeInput] = useState(formattedWorkTime);
    const [shortBreakInput, setShortBreakInput] = useState(formattedShortBreak);
    const [longBreakInput, setLongBreakInput] = useState(formattedLongBreak);

  const value: TimerContextType = {
    activeOption,
    setActiveOption,
    workTime,
    setWorkTime,
    shortBreak,
    setShortBreak,
    displayTime,
    setDisplayTime,
    setLongBreak,
    longBreak,
    workTimeInput,
    shortBreakInput,
    longBreakInput,
    setWorkTimeInput, 
    setShortBreakInput,
    setLongBreakInput
  };

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
};

function useTimer(){
    const context = useContext(TimerContext);
    if (!context) {
      throw new Error('useTimer must be used within a TimerProvider');
    }
    return context;
};

export { TimerProvider, useTimer}
