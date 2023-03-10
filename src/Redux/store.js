import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const inishialState = {
  user: null,
  token: "",
};

const authReduser = (state = inishialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export const store = createStore(
  authReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
