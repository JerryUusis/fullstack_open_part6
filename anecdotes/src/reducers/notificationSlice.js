import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: "",
    isVisible: false,
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
      state.isVisible = true;
    },
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const setNotification = (message, timeOut) => {
  return (dispatch) => {
    dispatch(setMessage(message));
    setTimeout(() => {
      dispatch(setIsVisible(false));
    }, timeOut * 1000);
  };
};

export default notificationSlice.reducer;
export const {
  setVoteNotificationMessage,
  setNotifyNewAnecdote,
  setIsVisible,
  setMessage,
} = notificationSlice.actions;
