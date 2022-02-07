const UserReducer = (state, action) => {
  switch (action.type) {
    //get clients
    case "GET_CLIENTS_START":
      return {
        users: [],
        isFetching: true,
        error: false,
      };
    case "GET_CLIENTS_SUCCESS":
      return {
        users: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_CLIENTS_FAILURE":
      return {
        users: [],
        isFetching: false,
        error: true,
      };

    //delete user
    case "DELETE_USER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_USER_SUCCESS":
      return {
        users: state.users.filter((user) => user._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default UserReducer;
