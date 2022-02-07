import axios from "axios";
import { getAdminsSuccess } from "../adminContext/AdminActions";
import {
  getAccountFailure,
  getAccountStart,
  loginFailure,
  loginStart,
  loginSuccess,
} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
