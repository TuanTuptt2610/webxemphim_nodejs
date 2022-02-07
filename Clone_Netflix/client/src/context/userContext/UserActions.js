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
