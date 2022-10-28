import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
}

const InputField: FC<Props> = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField variant="outlined" label={label} fullWidth {...field} />
      )}
    />
  );
};

export default InputField;
