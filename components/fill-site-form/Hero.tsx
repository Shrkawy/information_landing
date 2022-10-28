import { Paper, Typography } from "@mui/material";
import InputField from "./InputField";
import UploadImage from "./UploadImage";

const Hero = () => {
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
        Hero
      </Typography>
      <UploadImage
        title="Upload Hero Background Image"
        name="hero.background_image"
      />
      <InputField name="hero.title" label="Hero Title" />
      <InputField name="hero.subtitle" label="Hero Subtitle" />
      <InputField name="hero.cta.text" label="Hero Button Text" />
      <InputField name="hero.cta.href" label="Hero Button Link" />
    </Paper>
  );
};

export default Hero;
