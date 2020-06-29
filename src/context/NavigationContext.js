import React, { createContext, useContext, useReducer } from "react";

const NavigationStateContext = createContext();
const NavigationDispatchContext = createContext();

const OPEN_FILTERS = "OPEN_FILTERS";
const CLOSE_FILTERS = "CLOSE_FILTERS";

const initialState = {
  filtersIsOpen: false,
};

const reducer = (state, { type }) => {
  switch (type) {
    case OPEN_FILTERS:
      return { ...state, filtersIsOpen: true };
    case CLOSE_FILTERS:
      return { ...state, filtersIsOpen: false };
    default:
      throw new Error(`Invalid action: ${type}`);
  }
};

const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFilters = () =>
    state.filtersIsOpen
      ? dispatch({ type: CLOSE_FILTERS })
      : dispatch({ type: OPEN_FILTERS });

  return (
    <NavigationStateContext.Provider value={{ ...state }}>
      <NavigationDispatchContext.Provider value={{ toggleFilters }}>
        {children}
      </NavigationDispatchContext.Provider>
    </NavigationStateContext.Provider>
  );
};

const useNavigationState = () => {
  const context = useContext(NavigationStateContext);

  if (!context)
    throw new Error(
      "useNavigationState must be used within a NavigationProvider"
    );

  return context;
};

const useNavigationDispatch = () => {
  const context = useContext(NavigationDispatchContext);

  if (!context)
    throw new Error(
      "useNavigationDispatch must be used within a NavigationProvider"
    );

  return context;
};

export { NavigationProvider, useNavigationState, useNavigationDispatch };
