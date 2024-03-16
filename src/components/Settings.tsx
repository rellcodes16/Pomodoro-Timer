import { useEffect } from 'react';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';
import { useColor } from './ColorContext';
import { useFont } from './FontContext';
import { useTimer } from './TimerContext';


function Settings() {
  const {
    setWorkTime,
    setShortBreak,
    setWorkTimeInput,
    setShortBreakInput,
    setLongBreak,
    setLongBreakInput,
    workTimeInput,
    shortBreakInput,
    longBreakInput,
    workTime,
    shortBreak,
    longBreak,
  } = useTimer();

  const { handleColorClick, activeColor } = useColor();
  const { activeFont, setActiveFont } = useFont();

  const handleWorkTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setWorkTimeInput(newValue);
    setWorkTime(newValue * 60); 
  };


  const handleShortBreakChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setShortBreakInput(newValue);
    setShortBreak(newValue * 60);
  };

  const handleLongBreakChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setLongBreakInput(newValue);
    setLongBreak(newValue * 60);
  };

  useEffect(() => {
    setWorkTimeInput(workTime / 60);
    setShortBreakInput(shortBreak / 60);
    setLongBreakInput(longBreak / 60);
  }, [workTime, shortBreak, longBreak]);

  return (
    <form style={{ fontFamily: activeFont }} className='min-w-[250px]'>
      <h1 className="capitalize text-3xl text-slate-900 font-semibold">settings</h1>

      <div className="mt-10">
        <h2 className="uppercase tracking-[0.5em] text-slate-900 font-semibold">Time (minutes)</h2>

        <div className="sm:flex gap-3 mt-5">
          <div className='flex sm:block justify-between mb-3 sm:mb-0'>
            <p className="text-gray-600 md:flex">work</p>
            <input
              type="number"
              value={workTimeInput}
              onChange={handleWorkTimeChange}
              className="bg-slate-300 rounded-md text-lg text-slate-900 px-2 py-1 w-[200px] sm:w-[150px]"
            />
          </div>
          <div className='flex sm:block justify-between mb-3 sm:mb-0'>
            <p className="text-gray-600 md:flex">short break</p>
            <input
              type="number"
              value={shortBreakInput}
              onChange={handleShortBreakChange}
              className="bg-slate-300 rounded-md text-lg text-slate-900 px-2 py-1 w-[200px] sm:w-[150px]"
            />
          </div>
          <div className='flex sm:block justify-between mb-3 sm:mb-0'>
            <p className="text-gray-600">long break</p>
            <input
              type="number"
              value={longBreakInput}
              onChange={handleLongBreakChange}
              className="bg-slate-300 rounded-md text-lg text-slate-900 px-2 py-1 w-[200px] sm:w-[150px]"
            />
          </div>
        </div>
      </div>

      <div className='sm:flex justify-between mt-7'>
        <h2 className='uppercase tracking-[0.5em] text-slate-900 font-semibold self-center text-center sm:text-start mb-2 sm:mb-0'>font</h2>

        <div className='flex py-2 gap-5 text-slate-900 justify-center sm:justify-normal'>
          <div
            style={{ fontFamily: 'ojuju'}}
            className={`py-2 px-3 cursor-pointer rounded-full font-sans hover:bg-slate-900 hover:text-white ${
              activeFont === 'ojuju' ? 'bg-slate-900 text-white' : ''
            }`}
            onClick={() => setActiveFont('ojuju')}
          >
            Aa
          </div>
          <div
            style={{ fontFamily: 'madimi one'}}
            className={`py-2 px-3 cursor-pointer rounded-full font-mono hover:bg-slate-900 hover:text-white ${
              activeFont === 'madimi one' ? 'bg-slate-900 text-white' : ''
            }`}
            onClick={() => setActiveFont('madimi one')}
          >
            Aa
          </div>
          <div
            style={{ fontFamily: 'poppins'}}
            className={`py-2 px-3 cursor-pointer rounded-full font-serif hover:bg-slate-900 hover:text-white ${
              activeFont === 'poppins' ? 'bg-slate-900 text-white' : ''
            }`}
            onClick={() => setActiveFont('poppins')}
          >
            Aa
          </div>
        </div>
      </div>

      <div className='sm:flex justify-between mt-7'>
        <h2 className='uppercase tracking-[0.5em] text-slate-900 font-semibold text-center sm:text-start mb-2 sm:mb-0'>Color</h2>

        <div className='flex gap-7 justify-center sm:justify-normal'>
          <div onClick={() => handleColorClick('rgb(239 68 68)')}>
            {activeColor === 'rgb(239 68 68)' ? <FaCheckCircle className='text-red-500 text-4xl cursor-pointer hover:text-5xl transition-all'/> : <FaCircle className='text-red-500 text-4xl cursor-pointer hover:text-5xl transition-all'/>}
          </div>
          <div onClick={() => handleColorClick('rgb(74 222 128)')}>
            {activeColor === 'rgb(74 222 128)' ? <FaCheckCircle className='text-green-400 text-4xl cursor-pointer hover:text-5xl transition-all'/> : <FaCircle className='text-green-300 text-4xl cursor-pointer hover:text-5xl transition-all'/>}
          </div>
          <div onClick={() => handleColorClick('rgb(99 102 241)')}>
            {activeColor === 'rgb(99 102 241)' ? <FaCheckCircle className='text-indigo-500 text-4xl cursor-pointer hover:text-5xl transition-all'/> : <FaCircle className='text-indigo-500 text-4xl cursor-pointer hover:text-5xl transition-all'/>}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Settings;
