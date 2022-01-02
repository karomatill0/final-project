export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return state.filter((v, i) => i !== action.payload);
    default:
      return state;
  }
};
