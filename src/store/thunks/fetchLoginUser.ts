import axios from "axios";
import { userSlice } from "../slices/userSlice";
import { AppDispatch } from "../store";
import { Responce } from "../types/user";

interface Body {
  email: string;
  password: string;
}

export const fetchLoginUser =
  (payload: Body) => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.fetchUser);

    const URL = `https://${process.env.VERCEL_URL!}/api/login`;

    const res = await axios.post(URL, payload);

    const data: Responce = res.data;

    if(data.isError) {
      dispatch(userSlice.actions.fetchUserError(data.res))
      return
    }

    dispatch(userSlice.actions.fetchUserSuccess(data.res));
    return;
  };
