//get clients
export const getClientsStart = () => ({
  type: "GET_CLIENTS_START",
});

export const getClientsSuccess = (users) => ({
  type: "GET_CLIENTS_SUCCESS",
  payload: users,
});

export const getClientsFailure = () => ({
  type: "GET_CLIENTS_FAILURE",
});

//delete user
export const deleteUserStart = () => ({
  type: "DELETE_USER_START",
});

export const deleteUserSuccess = (id) => ({
  type: "DELETE_USER_SUCCESS",
  payload: id,
});

export const deleteUserFailure = () => ({
  type: "DELETE_USER_FAILURE",
});
