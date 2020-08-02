const dataFetch = (
  state = { data: null, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "LOADED":
      return { ...state, loading: true, loaded: false, posts: action.payload };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default dataFetch;
