import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdotesSlice";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newAnecdote(event.target.anecdoteInput.value));
    event.target.anecdoteInput.value = "";
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdoteInput" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};
export default AnecdoteForm;
