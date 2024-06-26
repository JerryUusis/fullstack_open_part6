import { useDispatch } from "react-redux";
import { setNotifyNewAnecdote } from "../reducers/notificationSlice";
import anecdotesService from "../services/anecdotesService";
import { newAnecdote } from "../reducers/anecdotesSlice";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const content = event.target.anecdoteInput.value;
    event.target.anecdoteInput.value = "";
    const newAnecdoteObject = await anecdotesService.createNew({
      content,
      votes: 0,
    });
    dispatch(newAnecdote(newAnecdoteObject));
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
