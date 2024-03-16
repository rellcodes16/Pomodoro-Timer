import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FontProvider } from './components/FontContext.tsx'
import { TimerProvider } from './components/TimerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FontProvider>
    <TimerProvider>
      <App />
    </TimerProvider>
    </FontProvider>
  </React.StrictMode>,
)
