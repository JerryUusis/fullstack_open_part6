import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./anecdotesSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterSlice,
  },
});

export default store;
