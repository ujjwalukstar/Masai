import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isAuth: false,
  token: "",
  isError: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
        isError: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    default:
      return state;
  }
};

// Thunk action
export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: LOGIN_SUCCESS, payload: data.token });
      return true;
    } else {
      dispatch({ type: LOGIN_FAILURE });
      return false;
    }
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
    return false;
  }
};
