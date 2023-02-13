import styled from "@emotion/styled";
import { css, TextField } from "@mui/material";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  padding: 3rem 4rem;
  z-index: 20;
  background-color: #132f4c;
  display: flex;
  justify-content: center;
  color: white;
`;

export const Error = styled.span`
  color: red
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  > label {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 900;
  }

  > a {
    color: white;
    font-size: 0.8rem;
  }
`

export const Icon = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    color: white;
    width: 2rem;
    height: 2rem;
  }
`

export const StyledTextField = styled(TextField)<{ helperText: string | false | undefined }>`
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