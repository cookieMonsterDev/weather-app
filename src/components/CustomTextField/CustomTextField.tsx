import styled from "@emotion/styled";
import { css, TextField } from "@mui/material";
import { useState } from "react";

interface CustomTextFieldProps {
  id: string;
  label: string;
  helperText: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  validator: (str: string | undefined) => string;
}

interface StyledTextFieldProsp {
  id: string;
  label: string;
  helperText: string;
}

const CustomTextField = ({
  id,
  label,
  helperText,
  onChange,
  validator,
}: CustomTextFieldProps) => {
  const [error, setError] = useState("");

  const handleBlur = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const valid = validator(e.target.value);
    setError(valid);
  };

  return (
    <StyledTextField
      id={id}
      label={label}
      helperText={helperText ? helperText : error}
      variant="outlined"
      error={helperText ? true : false}
      onChange={onChange}
      onBlur={handleBlur}
    />
  );
};

export default CustomTextField;

const StyledTextField = styled(TextField)<StyledTextFieldProsp>`
  width: 30rem;
  background: transparent;

  input {
    color: white;

    &:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      -webkit-text-fill-color: white;
      -webkit-box-shadow: 0 0 0px 40rem white inset;
      box-shadow: 0 0 0 30px #132f4c inset !important;
    }
  }

  & label.MuiFormLabel-root {
    color: white;
  }
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-width: 2px;
      border-color: white;
    }
    &:hover fieldset {
      border-width: 3px;
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }

  ${({ helperText }) =>
    helperText &&
    css`
      & label.MuiFormLabel-root {
        color: red;
      }
      & label.Mui-focused {
        color: red;
      }

      & .MuiOutlinedInput-root {
        & fieldset {
          border-width: 2px;
          border-color: red;
        }
        &:hover fieldset {
          border-width: 3px;
          border-color: red;
        }
        &.Mui-focused fieldset {
          border-color: red;
        }
      }

      & .MuiFormHelperText-root {
        color: red;
      }
    `}

  @media only screen and (max-width: 25rem) {
    width: 20rem;
  }
`;
