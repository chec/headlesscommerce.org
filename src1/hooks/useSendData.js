import { useReducer } from "react";

const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
const SUBMIT_ERROR = "SUBMIT_ERROR";

function reducer(state, { type, message }) {
  switch (type) {
    case SUBMIT_ERROR:
      return {
        ...state,
        error: message,
        submitted: false,
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        error: null,
        submitted: true,
      };
    default:
      return {
        ...state,
      };
  }
}

function useSendData(endpoint) {
  const [state, dispatch] = useReducer(reducer, {
    error: null,
    submitted: null,
  });

  async function sendData(body) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error("There was a problem");

      dispatch({ type: SUBMIT_SUCCESS });
    } catch ({ message }) {
      dispatch({ type: SUBMIT_ERROR, message });
    }
  }

  return { sendData, ...state };
}

export default useSendData;
