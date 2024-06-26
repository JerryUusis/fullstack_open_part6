const reducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER": {
      const { filterValue } = action.payload;
      return filterValue
    }
    default:
      return state;
  }
};

export const filterAnecdotes = (filterValue) => {
  return {
    type: "FILTER",
    payload: {
      filterValue,
    },
  };
};

export default reducer;
