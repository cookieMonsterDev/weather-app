import { useState } from "react";
import { StyledTextField } from "./CustomTextField.styled";
import { CustomTextFieldProps } from "./CustomTextField.types";

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
