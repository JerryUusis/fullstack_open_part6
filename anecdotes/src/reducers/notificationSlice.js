import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: "",
    isVisible: false,
  },
  reducers: {
    setVoteNotificationMessage: (state, action) => {
      state.message = `you voted '${action.payload}'`;
      state.isVisible = true;
    },
    setNotifyNewAnecdote: (state, action) => {
      state.message = `new anecdote created: '${action.payload}'`;
      state.isVisible = true;
    },
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export default notificationSlice.reducer;
export const {
  setVoteNotificationMessage,
  setNotifyNewAnecdote,
  setIsVisible,
} = notificationSlice.actions;
