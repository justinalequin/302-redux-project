import { configureStore } from "@reduxjs/toolkit";

export const SIGN_IN_ACTION = "signIn";
export const SIGN_OUT_ACTION = "signOut";
export const TWEET_ACTION = "tweet";

const initialUser =
  JSON.parse(window.localStorage.getItem("applicationState"))?.user || null;
const initialTweetState =
  JSON.parse(window.localStorage.getItem("applicationState"))?.tweets || [];

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION:
      return action.payload;
    case SIGN_OUT_ACTION:
      return state;
    default:
      return (
        JSON.parse(window.localStorage.getItem("applicationState"))?.user ||
        state
      );
  }
};

const tweetReducer = (state = initialTweetState, action) => {
  switch (action.type) {
    case TWEET_ACTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      tweets: tweetReducer,
    },
  },
  {
    user: JSON.parse(window.localStorage.getItem("applicationState")),
  }
);

function handleStateChange() {
  const newState = store.getState();

  window.localStorage.setItem("applicationState", JSON.stringify(newState));

  console.log("newState", newState);
}

store.subscribe(handleStateChange);

export default store;
