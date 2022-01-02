
export const addProductReducerA = (state = true, action) => {
    switch (action.type) {
      case "OPEN_A":
        return false;
      case "CLOSE_A":
        return true;
      default:
        return state;
    }
  };
  