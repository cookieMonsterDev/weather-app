import { User } from "@/Schema/userSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginData, RegisterData, Responce, UpdateBookmarksData } from "./user.types";

export const fetchUserLogin = createAsyncThunk<
  User,
  LoginData,
  { rejectValue: string }
>("user/fetchUserLogin", async (body, { rejectWithValue }) => {
  const URL = `https://${process.env.VERCEL_URL!}/api/login`;

  const res = await axios.post(URL, body);

  const data: Responce = res.data;

  if (data.isError) {
    return rejectWithValue(data.res);
  }

  return data.res;
});

export const fetchUserRegister = createAsyncThunk<
  User,
  RegisterData,
  { rejectValue: string }
>("user/fetchUserRegister", async (body, { rejectWithValue }) => {
  const URL = `https://${process.env.VERCEL_URL!}/api/register`;

  const res = await axios.post(URL, body);

  const data: Responce = res.data;

  if (data.isError && data.res.code === 11000) {
    return rejectWithValue(`${Object.keys(data.res.keyPattern)[0]} is taken`);
  }

  if (data.isError) {
    return rejectWithValue(`Something went wrong`);
  }

  return data.res;
});

export const fetchUserBookmarks = createAsyncThunk<
  User,
  UpdateBookmarksData,
  { rejectValue: string }
>("user/fetchUserBookmarks", async (body, { rejectWithValue }) => {
  const URL = `https://${process.env.VERCEL_URL!}/api/bookmarks`;

  const res = await axios.post(URL, body);

  const data: Responce = res.data;

  if (data.isError) {
    return rejectWithValue(data.res);
  }

  return data.res;
});