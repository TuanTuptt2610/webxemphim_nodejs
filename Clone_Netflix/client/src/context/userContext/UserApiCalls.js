import axios from "axios";
import {
  getClientsFailure,
  getClientsStart,
  getClientsSuccess,
} from "./UserActions";

//get clients
export const getClients = async (dispatch) => {
  dispatch(getClientsStart());
  try {
    const res = await axios.get("/users", {});
    dispatch(getClientsSuccess(res.data));
  } catch (err) {
    dispatch(getClientsFailure());
  }
};
