import { Paper, Typography } from "@mui/material";
import InputField from "./InputField";

const EmailCollecting = () => {
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
        Email Collecting
      </Typography>
      <InputField name="email_collecting.title" label="Section Title" />
      <InputField name="email_collecting.subtitle" label="Section Subtitle" />
      <InputField
        name="email_collecting.cta.text"
        label="Section Button Text"
      />
      <InputField
        name="email_collecting.cta.href"
        label="Section Button Link"
      />
    </Paper>
  );
};

export default EmailCollecting;
