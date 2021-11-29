import React, { createContext, useCallback, useState } from 'react';

export const OfflineContext = createContext();

export default function OfflineProvider({ children }) {
  const [ online, setOnline ] = useState(navigator.onLine);

  const updateNetworkState = useCallback(function update(state) {
    setOnline(state);
  }, []);

  const isOnline = useCallback(function getState() {
    return online;
  }, [online]);

  const childProps = { online, updateNetworkState, isOnline }

  return (
    <OfflineContext.Provider value={childProps}>
      { children }
    </OfflineContext.Provider>
  );
}