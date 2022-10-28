import { Paper, Typography, Button } from "@mui/material";
import UploadImage from "./UploadImage";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

type TFeature = { image: string; title: string; description: string };

const Features = () => {
  const { setValue, getValues, watch } = useFormContext();

  const addFeature = () => {
    setValue("features.items", [
      ...getValues("features.items"),
      { image: "", title: "", description: "" },
    ]);
  };

  const removeFeature = (index: number) => {
    setValue(
      `features.items`,
      (getValues(`features.items`) as TFeature[])?.filter((_, i) => i !== index)
    );
  };

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
        Features
      </Typography>
      <Button variant="outlined" onClick={addFeature}>
        Add Feature
      </Button>
      {watch("features.items").map((feature: TFeature, index: number) => (
        <Paper key={index} sx={{ p: 2, display: "grid", gap: 2 }}>
          <Typography variant="h5" gutterBottom>
            Feature {index + 1}
          </Typography>

          <UploadImage
            title="Upload Feature Image"
            name={`features.items[${index}].image`}
          />
          <InputField
            name={`features.items[${index}].title`}
            label="Feature Title"
          />
          <InputField
            name={`features.items[${index}].description`}
            label="Feature Description"
          />
          <Button
            color="warning"
            variant="outlined"
            onClick={() => removeFeature(index)}
          >
            Remove Feature
          </Button>
        </Paper>
      ))}
    </Paper>
  );
};

export default Features;
