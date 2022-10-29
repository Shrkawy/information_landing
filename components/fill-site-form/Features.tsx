import { Paper, Typography, Button, Box, Tooltip } from "@mui/material";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";
import { FC } from "react";
import { InfoOutlined } from "@mui/icons-material";

type TFeature = { image: string; title: string; description: string };

const FeatureIconSelector: FC<{ name: string }> = ({ name }) => {
  const { watch } = useFormContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <InputField name={name} label="Add Icon name" />
      {watch(name) && (
        <Tooltip title="Icon Preview">
          <i className={`fa-solid fa-${watch(name)}`}></i>
        </Tooltip>
      )}
      <Tooltip title="Click on the button, It will redirect you to FontAwesome Website, search for a required Icon 'must be solid Icon', and add the icon name to this textbox">
        <Button
          startIcon={
            <InfoOutlined
              sx={{
                cursor: "help",
              }}
            />
          }
          component="a"
          target="_blank"
          href="https://fontawesome.com/search?o=r&m=free&s=solid"
          sx={{ width: "100%" }}
        >
          Select Icon
        </Button>
      </Tooltip>
    </Box>
  );
};

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

          <FeatureIconSelector name={`features.items[${index}].image`} />
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
