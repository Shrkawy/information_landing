import { Paper, Typography, Box, IconButton, Button } from "@mui/material";
import { DeleteRounded } from "@mui/icons-material";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";
import FORM_INITIAL_DATA from "data/form_initial_data.json";

const Pricing = () => {
  const { getValues, watch, setValue } = useFormContext();

  const deleteDescription = (index: number, descriptionIndex: number) => {
    const newPlans = [...getValues("pricing.plans")];
    newPlans[index].description.splice(descriptionIndex, 1);
    setValue("pricing.plans", newPlans);
  };

  const addDescriptionLine = (index: number) => {
    const newPlans = [...getValues("pricing.plans")];
    newPlans[index].description.push("");
    setValue("pricing.plans", newPlans);
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
        Pricing
      </Typography>
      <InputField name="pricing.title" label="Pricing Title" />
      <Box
        sx={{
          display: "grid",
          gap: 2,
          ml: 3,
        }}
      >
        {watch("pricing.plans")?.map(
          (plan: typeof FORM_INITIAL_DATA.pricing.plans[0], index: number) => (
            <Box
              key={index}
              sx={{
                display: "grid",
                gap: 2,
              }}
            >
              <Typography variant="h5">Plan {index + 1}</Typography>

              <InputField
                name={`pricing.plans[${index}].title`}
                label="Plan Title"
              />
              <InputField
                name={`pricing.plans[${index}].price`}
                label="Plan Price"
              />
              {plan.description?.map((description, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    gap: 2,
                    px: 2,
                  }}
                >
                  <InputField
                    name={`pricing.plans[${index}].description[${i}]`}
                    label={`Plan Description ${i + 1}`}
                  />
                  <IconButton
                    onClick={() => deleteDescription(index, i)}
                    color="warning"
                  >
                    <DeleteRounded />
                  </IconButton>
                </Box>
              ))}
              <Button onClick={() => addDescriptionLine(index)} sx={{ px: 2 }}>
                add new description line
              </Button>
            </Box>
          )
        )}
      </Box>
    </Paper>
  );
};

export default Pricing;
