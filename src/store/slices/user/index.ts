import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./user.types";
import { User } from "@/Schema/userSchema";
import {
  fetchUserLogin,
  fetchUserRegister,
  fetchUserBookmarks,
} from "./user.thunks";

const initialState: UserState = {
  user: null,
  isLoadingUser: false,
  userError: null,
  isMenu: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<User | null>) {
      state.user = payload;
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoadingUser = payload;
    },
    setError(state, { payload }: PayloadAction<string | null>) {
      state.userError = payload;
    },
    setMenu(state, action: PayloadAction<boolean>) {
      state.isMenu = action.payload;
    },
  },
  extraReducers: (builder) => {
    //Login
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.isLoadingUser = true;
      state.userError = null;
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoadingUser = false;
    });
    builder.addCase(fetchUserLogin.rejected, (state, { payload }) => {
      state.user = null;
      if (payload) state.userError = payload;
      state.isLoadingUser = false;
    });
    //Register
    builder.addCase(fetchUserRegister.pending, (state) => {
      state.isLoadingUser = true;
      state.userError = null;
    });
    builder.addCase(fetchUserRegister.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoadingUser = false;
    });
    builder.addCase(fetchUserRegister.rejected, (state, { payload }) => {
      state.user = null;
      if (payload) state.userError = payload;
      state.isLoadingUser = false;
    });
    //Bookmarks
    builder.addCase(fetchUserBookmarks.pending, (state) => {
      state.isLoadingUser = true;
      state.userError = null;
    });
    builder.addCase(fetchUserBookmarks.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoadingUser = false;
    });
    builder.addCase(fetchUserBookmarks.rejected, (state, { payload }) => {
      state.user = null;
      if (payload) state.userError = payload;
      state.isLoadingUser = false;
    });
  },
});

export const { setUser, setLoading, setError, setMenu } = userSlice.actions;

export default userSlice.reducer;
