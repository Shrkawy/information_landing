import { Paper, Typography, TextField } from "@mui/material";
import UploadImage from "./UploadImage";
import InputField from "./InputField";

const Brand = () => {
  return (
    <Paper sx={{ p: 2, pt: 4, display: "grid", gap: 2 }}>
      <Typography
        color="primary.main"
        sx={{
          fontSize: "2rem",
          fontWeight: 500,
        }}
        gutterBottom
      >
        Brand
      </Typography>
      <InputField name="brand.name" label="Brand Name" />

      <UploadImage title="favicon" name="brand.favicon" />

      <UploadImage title="Logo" name="brand.logo" />
    </Paper>
  );
};

export default Brand;
