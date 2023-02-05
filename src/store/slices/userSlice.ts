import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/Schema/userSchema";


export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isMenu: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
  isMenu: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUser(state) {
      state.isLoading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    fetchUserError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    resetUser(state) {
      state.user = null
    },
    setMenu(state, action: PayloadAction<boolean>) {
      state.isMenu = action.payload
    },
  },
});

export const {
  fetchUser,
  fetchUserSuccess,
  fetchUserError,
  resetUser,
  setMenu
} = userSlice.actions;

export default userSlice.reducer;