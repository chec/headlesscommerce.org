import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const BookmarksStateContext = createContext(null);
const BookmarksDispatchContext = createContext(null);

const ADD_BOOKMARK = "ADD_BOOKMARK";
const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

const initialState = {
  bookmarks: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOKMARK:
      return { ...state, bookmarks: [...state.bookmarks, payload] };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((b) => b.id !== payload),
      };
    default:
      throw new Error(`Invalid action: ${type}`);
  }
};

const BookmarksProvider = ({ children }) => {
  const [savedBookmarks, saveBookmarks] = useLocalStorage(
    "headlesscommerce-bookmarks",
    JSON.stringify(initialState)
  );

  const [state, dispatch] = useReducer(reducer, JSON.parse(savedBookmarks));

  useEffect(() => {
    saveBookmarks(JSON.stringify(state));
  }, [state, saveBookmarks]);

  const addBookmark = (payload) => {
    const existing = state.bookmarks.find((b) => b.id === payload.id);

    if (existing)
      return dispatch({ payload: payload.id, type: REMOVE_BOOKMARK });

    dispatch({ payload, type: ADD_BOOKMARK });
  };

  const removeBookmark = (id) =>
    dispatch({ payload: id, type: REMOVE_BOOKMARK });

  const isBookmarked = (id) => state.bookmarks.some((b) => b.id === id);

  const hasBookmarks = state.bookmarks.length > 0;

  return (
    <BookmarksStateContext.Provider
      value={{ ...state, isBookmarked, hasBookmarks }}
    >
      <BookmarksDispatchContext.Provider
        value={{ addBookmark, removeBookmark }}
      >
        {children}
      </BookmarksDispatchContext.Provider>
    </BookmarksStateContext.Provider>
  );
};

const useBookmarksState = () => {
  const context = useContext(BookmarksStateContext);

  if (!context)
    throw new Error(
      "useBookmarksState must be used within a BookmarksProvider"
    );

  return context;
};

const useBookmarksDispatch = () => {
  const context = useContext(BookmarksDispatchContext);

  if (!context)
    throw new Error(
      "useBookmarksDispatch must be used within a BookmarksProvider"
    );

  return context;
};

export { BookmarksProvider, useBookmarksState, useBookmarksDispatch };
