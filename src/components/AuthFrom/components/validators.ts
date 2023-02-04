const NO_SPACES = /^\S*$/;
const EMAIL_REGEX =
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const AT_LEAST_ONE_UPPER_CASE_LETTER = /(?=.*?[A-Z])/;
const AT_LEAST_ONE_LOWER_CASE_LETTER = /(?=.*?[a-z])/;
const AT_LEAST_ONE_NUMBER = /(?=.*?[0-9])/;
const AT_LEAST_ONE_SPECIAL_CHARACTER = /(?=.*?[#?!@$%^_&*-])/;

export const userNameValidator = (str: string | undefined): string => {
  if (!str) return "Username is required";

  if (str.length < 2) return "Min 2 characters";

  if (str.length > 64) return "Max 64 characters";

  return "";
};

export const emailValidator = (str: string | undefined): string => {
  if (!str) return "Email is required";

  if (!str.match(EMAIL_REGEX)) return "Should be like: test@email.com";

  return "";
};

export const passwordValidator = (str: string | undefined): string => { 
  if (!str) return "Password is required";

  if (str.length < 8) return "Min 8 characters";

  if (str.length > 64) return "Max 64 characters";

  if (!str.match(AT_LEAST_ONE_UPPER_CASE_LETTER)) return "At least 1 uppercase letter";

  if (!str.match(AT_LEAST_ONE_LOWER_CASE_LETTER)) return "At least 1 lowercase letter";

  if (!str.match(AT_LEAST_ONE_NUMBER)) return "At least 1 number";

  if (!str.match(AT_LEAST_ONE_SPECIAL_CHARACTER)) return "At least 1 special character";

  return "";
}


