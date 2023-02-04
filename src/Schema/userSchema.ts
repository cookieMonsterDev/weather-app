import { Schema, model } from "mongoose";

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  cities: string[];
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

const NO_SPACES = /^\S*$/;
const EMAIL_REGEX =
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const AT_LEAST_ONE_UPPER_CASE_LETTER = /(?=.*?[A-Z])/;
const AT_LEAST_ONE_LOWER_CASE_LETTER = /(?=.*?[a-z])/;
const AT_LEAST_ONE_NUMBER = /(?=.*?[0-9])/;
const AT_LEAST_ONE_SPECIAL_CHARACTER = /(?=.*?[#?!@$%^_&*-])/;

const userSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      minLength: [2, "username must have at least 2 characters"],
      maxLength: [64, "username must have less than 64 characters"],
      match: [NO_SPACES, "username must have no spaces"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      match: [EMAIL_REGEX, "the string is not an email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "password must have at least 8 characters"],
      maxLength: [64, "password must have less than 64 characters"],
      validate: [
        {
          validator: (p: string) => p.match(AT_LEAST_ONE_UPPER_CASE_LETTER),
          message: "password must have at least 1 upper case letter",
        },
        {
          validator: (p: string) => p.match(AT_LEAST_ONE_LOWER_CASE_LETTER),
          message: "password must have at least 1 lower case letter",
        },
        {
          validator: (p: string) => p.match(AT_LEAST_ONE_NUMBER),
          message: "password must have at least 1 number",
        },
        {
          validator: (p: string) => p.match(AT_LEAST_ONE_SPECIAL_CHARACTER),
          message: "password must have at least 1 special character",
        },
        {
          validator: (p: string) => p.match(NO_SPACES),
          message: "password must have no spaces",
        },
      ],
    },
    cities: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);

export default userModel;
