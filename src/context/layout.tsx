import React, { createContext, useContext, useReducer } from "react";

const LayoutStateContext = createContext(null);
const LayoutDispatchContext = createContext(null);

const SET_LIST = "SET_LIST";
const SET_GRID = "SET_GRID";

const initialState = {
  layout: "grid",
};

const reducer = (state, { type }) => {
  switch (type) {
    case SET_LIST:
      return { ...state, layout: "list" };
    case SET_GRID:
      return { ...state, layout: "grid" };
    default:
      throw new Error(`Invalid action: ${type}`);
  }
};

const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setToGrid = () => dispatch({ type: SET_GRID });
  const setToList = () => dispatch({ type: SET_LIST });

  return (
    <LayoutStateContext.Provider
      value={{
        ...state,
        isList: state.layout === "list",
        isGrid: state.layout === "grid",
      }}
    >
      <LayoutDispatchContext.Provider value={{ setToGrid, setToList }}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
};

const useLayoutState = () => {
  const context = useContext(LayoutStateContext);

  if (!context)
    throw new Error("useLayoutState must be used within a LayoutProvider");

  return context;
};

const useLayoutDispatch = () => {
  const context = useContext(LayoutDispatchContext);

  if (!context)
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");

  return context;
};

export { LayoutProvider, useLayoutState, useLayoutDispatch };
