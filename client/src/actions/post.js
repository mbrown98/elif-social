import axios from "axios";

import { setAlert } from "./alert";

import { GET_POSTS, POST_ERROR } from "./types";

// GET posts
export const getPosts = () => async (dispatch) => {
  console.log("getposts");
  try {
    const res = await axios.get("/api/posts");
    console.log("ttt", res);
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//
