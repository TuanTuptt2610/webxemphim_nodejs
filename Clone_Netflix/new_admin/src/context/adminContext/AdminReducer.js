const AdminReducer = (state, action) => {
  switch (action.type) {
    //get admin
    case "GET_ADMINS_START":
      return {
        users: [],
        isFetching: true,
        error: false,
      };
    case "GET_ADMINS_SUCCESS":
      return {
        users: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ADMINS_FAILURE":
      return {
        users: [],
        isFetching: false,
        error: true,
      };

    //create admin
    case "CREATE_ADMIN_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_ADMIN_SUCCESS":
      return {
        users: [...state.users, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_ADMIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //upload admin
    case "UPLOAD_ADMIN_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_ADMIN_SUCCESS":
      return {
        users: state.users.map(
          (user) => user._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_ADMIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //update admin
    case "UPDATE_ADMIN_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_ADMIN_SUCCESS":
      return {
        users: [...state.users, action.payload],
        isFetching: false,
        error: false,
      };
    case "UPDATE_ADMIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //delete admin
    case "DELETE_ADMIN_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_ADMIN_SUCCESS":
      return {
        users: state.users.filter((user) => user._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_ADMIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default AdminReducer;
