import styled from "@emotion/styled";
import { css, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)<{ helperText: string }>`
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
