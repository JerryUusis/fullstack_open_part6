import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotesService";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote: (state, action) => {
      const anecdoteToChange = state.find((a) => action.payload.id === a.id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      // Map through the anecdotes array and if id is same as action.payload.id, then replace it with changed anecdote
      return (
        state
          .map((anecdote) =>
            anecdote.id === action.payload.id ? changedAnecdote : anecdote
          )
          // Sort in descending order
          .sort((a, b) => b.votes - a.votes)
      );
    },
    newAnecdote: (state, action) => {
      state.push(action.payload);
    },
    setAnecdotes: (state, action) => {
      return action.payload;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newAnecdoteObject = await anecdoteService.createNew({
      content,
      votes: 0,
    });
    dispatch(newAnecdote(newAnecdoteObject));
  };
};

export const handleVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.update(anecdote);
    dispatch(addVote(updatedAnecdote));
  };
};

export const { addVote, newAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
