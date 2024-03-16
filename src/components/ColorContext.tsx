import  { createContext, useContext, useState } from 'react';

type ColorContextType = {
    activeColor: string;
    handleColorClick: (color: string) => void;
  };
  
const ColorContext = createContext<ColorContextType | undefined>(undefined);


const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeColor, setActiveColor] = useState('rgb(239 68 68)');

  const handleColorClick = (color: string) => {
    setActiveColor(color === activeColor ? '' : color);
  };

  return (
    <ColorContext.Provider value={{ activeColor, handleColorClick }}>
      {children}
    </ColorContext.Provider>
  );
};

function useColor() {
    const context = useContext(ColorContext);

    if (context === undefined)
        throw new Error('ColorContext was used outside of ColorProvider');

    return context;
}

export { ColorProvider, useColor };
