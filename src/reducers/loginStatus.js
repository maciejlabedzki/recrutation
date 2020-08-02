const loginStatus = (state = { login: true }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, login: true };
    case "LOGOUT":
      return { ...state, login: false };
    default:
      return state;
  }
};

export default loginStatus;
