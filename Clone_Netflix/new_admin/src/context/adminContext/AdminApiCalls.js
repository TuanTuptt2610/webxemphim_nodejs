import axios from "axios";
import {
  createAdminFailure,
  createAdminStart,
  createAdminSuccess,
  deleteAdminFailure,
  deleteAdminStart,
  deleteAdminSuccess,
  getAdminsFailure,
  getAdminsStart,
  getAdminsSuccess,
} from "./AdminActions";

//get admins
export const getAdmins = async (dispatch) => {
  dispatch(getAdminsStart());
  try {
    const res = await axios.get("/admins", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getAdminsSuccess(res.data));
  } catch (err) {
    dispatch(getAdminsFailure());
  }
};

//create admin
export const createAdmin = async (user, dispatch) => {
  dispatch(createAdminStart());
  try {
    const res = await axios.post("/admins", user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createAdminSuccess(res.data));
  } catch (err) {
    dispatch(createAdminFailure());
  }
};

//update admin
export const updateAdmin = async (id, user, dispatch) => {
  dispatch(createAdminStart());
  try {
    const res = await axios.put("/admins/" + id, user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createAdminSuccess(res.data));
  } catch (err) {
    dispatch(createAdminFailure());
  }
};

//delete admin
export const deleteAdmin = async (id, dispatch) => {
  dispatch(deleteAdminStart());
  try {
    await axios.delete("/admins/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteAdminSuccess(id));
  } catch (err) {
    dispatch(deleteAdminFailure());
  }
};
