import Timer from "./components/Timer"
import Options from './components/Options'
import SettingsModal from './components/SettingsModal'
import { ColorProvider } from './components/ColorContext';
import { useFont } from './components/FontContext';
import { useTimer } from './components/TimerContext';

function App() {
  const { shortBreak, longBreak, workTime, setDisplayTime, displayTime } = useTimer()

  const { activeFont } = useFont();
  console.log(displayTime)

  const handleShortBreak = () => {
    setDisplayTime(shortBreak)
  }

  const handleLongBreak = () => {
    setDisplayTime(longBreak)
  }

  const handleWork = () => {
    setDisplayTime(workTime)
  }

  console.log(workTime)

  console.log(activeFont)
  return (
    <ColorProvider>
    <div className='bg-slate-900 h-[100vh] flex flex-col justify-center items-center' style={{ fontFamily: activeFont }}>
      <Options handleShortBreak={handleShortBreak} handleLongBreak={handleLongBreak} handleWork={handleWork} />
      <Timer initialSeconds={displayTime}/>

      <SettingsModal workTime={workTime} />
    </div>
    </ColorProvider>
  )
}

export default App