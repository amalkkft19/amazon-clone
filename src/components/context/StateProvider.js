import React, { createContext, useReducer, useContext } from "react";

//prepares the data layer
export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pulling information from data layer
export const useStateValue = () => useContext(StateContext);
