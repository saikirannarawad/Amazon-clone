// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// Wrap our app and provide a data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside of component
export const useStateValue = () => useContext(StateContext);
