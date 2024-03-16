import React, { createContext, useContext, useState } from 'react';

type FontContextType = {
  activeFont: string;
  setActiveFont: (font: string) => void;
};

const FontContext = createContext<FontContextType | undefined>(undefined);


const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeFont, setActiveFont] = useState<string>('ojuju');

  const value: FontContextType = {
    activeFont,
    setActiveFont,
  };

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

function useFont(){
    const context = useContext(FontContext);
    if (!context) {
      throw new Error('useFont must be used within a FontProvider');
    }
    return context;
};

export { FontProvider, useFont}
