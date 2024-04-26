import React, { createContext, useReducer } from 'react';
import mainReducer from './reducers';

const intialState = {
  products: [],
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: intialState,
  dispatch: () => null,
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, intialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
