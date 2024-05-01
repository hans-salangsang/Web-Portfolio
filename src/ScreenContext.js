import React, { createContext, useContext } from 'react';

const ScreenContext = createContext(false);

export const ScreenProvider = ({ children, screenSize }) => (
  <ScreenContext.Provider value={screenSize}>{children}</ScreenContext.Provider>
);

export const useScreenSize = () => useContext(ScreenContext);
