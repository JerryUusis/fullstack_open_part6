import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdotesSlice";
import { setVoteNotificationMessage } from "../reducers/notificationSlice";

const AnecdoteList = () => {
  const filterState = useSelector((state) => state.filter);
  const anecdotes = useSelector((state) => state.anecdotes);

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterState.toLowerCase())
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(id));
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(setVoteNotificationMessage(anecdote.content));
  };

  return (
    <>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
