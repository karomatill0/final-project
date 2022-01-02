
export const addProductReducer = (state = true, action) => {
  switch (action.type) {
    case "OPEN":
      return false;
    case "CLOSE":
      return true;
    default:
      return state;
  }
};
