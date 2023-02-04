import axios from "axios";
import { userSlice } from "../slices/userSlice";
import { AppDispatch } from "../store";
import { Responce } from "../types/user";

interface Body {
  username: string;
  email: string;
  password: string;
}

export const fetchRegisterUser =
  (payload: Body) => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.fetchUser);

    const URL = `https://${process.env.VERCEL_URL}/api/login`;
    // const URL = `http://localhost:3000/api/register`;

    const res = await axios.post(URL, payload);

    const data: Responce = res.data;


    if(data.isError && data.res.code === 11000) {
      dispatch(userSlice.actions.fetchUserError(`${Object.keys(data.res.keyPattern)[0]} is taken`))
      return
    }

    if (data.isError) {
      dispatch(userSlice.actions.fetchUserError("Something went wrong"));
      return;
    }


    console.log(data.res)
    dispatch(userSlice.actions.fetchUserSuccess(data.res));
    return;
  };


//   code
// : 
// 11000
// index
// : 
// 0
// keyPattern
// : 
// {email: 1}
// keyValue
// : 
// {email: 'mykhailo.toporkov@gmail.com'}