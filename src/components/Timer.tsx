import { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useColor } from './ColorContext';
import { useTimer } from './TimerContext';


type TimerProps = {
    initialSeconds: number;
}

const Timer = ({ initialSeconds } : TimerProps) => {
  
  const { workTime, longBreak, shortBreak } = useTimer()

  const [seconds, setSeconds] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);

  const { activeOption } = useTimer()

  const { activeColor } = useColor()

  useEffect(() => {
    let intervalId: number | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
          setSeconds(prevSeconds => {
              if (prevSeconds > 0) {
                  return prevSeconds - 1;
              } else {
                  setIsRunning(false);
                  return 0;
              }
          });
      }, 1000);
  }

  if (seconds === 0) {
    setIsRunning(false);
    announceTimeUp();
  }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);
  
  useEffect(() => {
    if(activeOption === 'work'){
      setSeconds(workTime);
    }
    else if(activeOption === 'shortBreak'){
      setSeconds(shortBreak)
    }
    else{
      setSeconds(longBreak)
    }

    
    console.log(initialSeconds)
  }, [initialSeconds, workTime, shortBreak, longBreak]);


const announceTimeUp = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = activeOption === 'work' ? 'Time up, take a break' : 'Time up, back to work'
    window.speechSynthesis.speak(msg);
};

  const percentage = (seconds / initialSeconds) * 100;

  console.log(percentage)

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  const buttonText = isRunning ? 'Pause' : 'Start'

  return (
    <div className="text-center p-5 bg-slate-950 shadow-2xl rounded-full">
        <div className='w-[100%] flex justify-center'>
            <CircularProgressbarWithChildren 
                value={percentage} 
                text={`${formattedMinutes}:${formattedSeconds}`} 
                styles={buildStyles({
                textColor: 'gray',
                pathColor: activeColor,
                trailColor: 'rgba(255, 255, 255, .2)',
                strokeLinecap: 'butt'
            })}>
                <div className="mt-28 absolute text-gray-400 text-2xl">
                  <button className="uppercase tracking-[0.3em]" onClick={isRunning ? handlePause : handleStart }>
                    {buttonText}
                  </button>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    </div>
  );
};

export default Timer;
