import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

// const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote: (state, action) => {
      const anecdoteToChange = state.find((a) => a.id === action.payload);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      // Map through the anecdotes array and if id is same as action.payload.id, then replace it with changed anecdote
      return (
        state
          .map((anecdote) =>
            anecdote.id === action.payload ? changedAnecdote : anecdote
          )
          // Sort in descending order
          .sort((a, b) => b.votes - a.votes)
      );
    },
    newAnecdote: (state, action) => {
      const newAnecdote = asObject(action.payload);
      state.push(newAnecdote);
    },
    setAnecdotes: (state, action) => {
      return action.payload;
    },
  },
});

export const { addVote, newAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
