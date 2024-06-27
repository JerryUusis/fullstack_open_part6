import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationSlice";
import { createNote } from "../reducers/anecdotesSlice";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const content = event.target.anecdoteInput.value;
    event.target.anecdoteInput.value = "";
    dispatch(createNote(content));
    dispatch(setNotification(`New anecdote: '${content}' created`, 5));
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
