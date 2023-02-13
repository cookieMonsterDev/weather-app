export interface CustomTextFieldProps {
  id: string;
  label: string;
  helperText: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  validator: (str: string | undefined) => string;
}
