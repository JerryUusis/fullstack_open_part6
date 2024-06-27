import { useDispatch } from "react-redux";
import { setNotifyNewAnecdote } from "../reducers/notificationSlice";
import { createNote } from "../reducers/anecdotesSlice";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const content = event.target.anecdoteInput.value;
    event.target.anecdoteInput.value = "";
    dispatch(createNote(content));
    dispatch(setNotifyNewAnecdote(content));
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
