import * as yup from "yup";
import { initialValuesProps } from "../AuthFrom.types";

const AT_LEAST_ONE_UPPER_CASE_LETTER = /(?=.*?[A-Z])/;
const AT_LEAST_ONE_LOWER_CASE_LETTER = /(?=.*?[a-z])/;
const AT_LEAST_ONE_NUMBER = /(?=.*?[0-9])/;
const AT_LEAST_ONE_SPECIAL_CHARACTER = /(?=.*?[#?!@$%^_&*-])/;

export const initialValuesLogin: initialValuesProps = {
  email: "",
  password: "",
};

export const initialValuesRegister: initialValuesProps = {
  username: "",
  email: "",
  password: "",
};

export const validationSchemaLogin = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email is not provided"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min 8 characters")
    .max(64, "Max 64 characters")
    .matches(AT_LEAST_ONE_UPPER_CASE_LETTER, "Required 1 uppercase letter")
    .matches(AT_LEAST_ONE_LOWER_CASE_LETTER, "Required 1 lower letter")
    .matches(AT_LEAST_ONE_NUMBER, "Required 1 number")
    .matches(AT_LEAST_ONE_SPECIAL_CHARACTER, "Required 1 special character"),
});

export const validationSchemaRegister = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(2, "Min 2 characters")
    .max(64, "Max 64 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email is not provided"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min 8 characters")
    .max(64, "Max 64 characters")
    .matches(AT_LEAST_ONE_UPPER_CASE_LETTER, "Required 1 uppercase letter")
    .matches(AT_LEAST_ONE_LOWER_CASE_LETTER, "Required 1 lower letter")
    .matches(AT_LEAST_ONE_NUMBER, "Required 1 number")
    .matches(AT_LEAST_ONE_SPECIAL_CHARACTER, "Required 1 special character"),
});

