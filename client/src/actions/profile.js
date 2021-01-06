import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// Get current user profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    console.log("get current profile");
    const res = await axios.get("/api/profile/me");
    console.log("res", res);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
