const pageNavigation = (state = { page: "ALL" }, action) => {
  switch (action.type) {
    case "PAGE-ALL":
      return { ...state, page: "ALL" };
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default pageNavigation;
