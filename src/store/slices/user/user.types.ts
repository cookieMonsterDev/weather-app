import { User } from "@/Schema/userSchema";

export interface UserState {
  user: User | null;
  isLoadingUser: boolean;
  userError: string | null;
  isMenu: boolean;
}

export interface Responce {
  isError: boolean;
  res: any;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface UpdateBookmarksData {
  id: string;
  cities: string[];
}