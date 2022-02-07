//get admins
export const getAdminsStart = () => ({
  type: "GET_ADMINS_START",
});

export const getAdminsSuccess = (users) => ({
  type: "GET_ADMINS_SUCCESS",
  payload: users,
});

export const getAdminsFailure = () => ({
  type: "GET_ADMINS_FAILURE",
});

//create admin
export const createAdminStart = () => ({
  type: "CREATE_ADMIN_START",
});

export const createAdminSuccess = (user) => ({
  type: "CREATE_ADMIN_SUCCESS",
  payload: user,
});

export const createAdminFailure = () => ({
  type: "CREATE_ADMIN_FAILURE",
});

//update admin
export const updateAdminStart = () => ({
  type: "UPDATE_ADMIN_START",
});

export const updateAdminSuccess = (user) => ({
  type: "UPDATE_ADMIN_SUCCESS",
  payload: user,
});

export const updateAdminFailure = () => ({
  type: "UPDATE_ADMIN_FAILURE",
});

//delete admin
export const deleteAdminStart = () => ({
  type: "DELETE_ADMIN_START",
});

export const deleteAdminSuccess = (id) => ({
  type: "DELETE_ADMIN_SUCCESS",
  payload: id,
});

export const deleteAdminFailure = () => ({
  type: "DELETE_ADMIN_FAILURE",
});
