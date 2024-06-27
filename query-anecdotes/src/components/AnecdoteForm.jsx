import { createAnecdote } from "../requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotificationDispatch } from "./NotificationContext";

const AnecdoteForm = ({ type }) => {
  const dispatch = useNotificationDispatch();
  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
    onError: () => {
      dispatch({
        type,
        payload: "too short anecdote, must have length 5 or more",
      });
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    newAnecdoteMutation.mutate({ content, votes: 0 });
    dispatch({ type, payload: `New anecdote '${content}' added` });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
