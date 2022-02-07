import axios from "axios";
import {
  // createAdminFailure,
  // createAdminStart,
  // createAdminSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getClientsFailure,
  getClientsStart,
  getClientsSuccess,
} from "./UserActions";

//get clients
export const getClients = async (dispatch) => {
  dispatch(getClientsStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getClientsSuccess(res.data));
  } catch (err) {
    dispatch(getClientsFailure());
  }
};

//delete client
export const deleteClient = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};
