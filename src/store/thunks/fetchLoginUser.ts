
import axios from "axios";
import { userSlice } from "../slices/userSlice";

import { AppDispatch } from "../store";

// export const fetchLoginUser =
//   (payload: Coordinates) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(userSlice.actions.fetchUser);

//       const URL = `http://localhost:3000/api/login`;

//       const { data } = await axios.post(URL, payload);

//       dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(data));
//       return;
//     } catch (error) {
//       dispatch(
//         currentWeatherSlice.actions.fetchCurrentWeatherError("Bad request!")
//       );
//     }
//   };