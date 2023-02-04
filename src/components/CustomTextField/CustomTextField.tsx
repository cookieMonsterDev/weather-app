import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";

interface CustomTextFieldProps {
  id: string;
  label: string;
  helperText: string;
}

const CustomTextField = ({ id, label, helperText }: CustomTextFieldProps) => {
  return (
    <TextFieldMod
      id={id}
      label={label}
      helperText={helperText}
      variant="outlined"
      error={helperText ? true : false}
    />
  );
};

export default CustomTextField;

const TextFieldMod = styled(TextField)<CustomTextFieldProps>`
  width: 100%;

  fieldset {
    border: 0.15rem solid #358adf;
  }

`