import { useSelector, useDispatch } from "react-redux";
import { handleVote } from "../reducers/anecdotesSlice";
import { setVoteNotificationMessage } from "../reducers/notificationSlice";

const AnecdoteList = () => {
  const filterState = useSelector((state) => state.filter);
  const anecdotes = useSelector((state) => state.anecdotes);

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterState.toLowerCase())
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    dispatch(handleVote(updatedAnecdote));
    dispatch(setVoteNotificationMessage(updatedAnecdote.content));
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
