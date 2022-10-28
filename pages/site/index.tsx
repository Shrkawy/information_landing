import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import FillSiteForm from "components/fill-site-form";

const SiteForm: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FillSiteForm />
      </Box>
    </Container>
  );
};

export default SiteForm;
