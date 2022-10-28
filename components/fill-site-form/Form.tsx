import { FC, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import Container from "@mui/material/Container";
import type { TSite } from "../../../prisma/site";

import Brand from "./Brand";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import EmailCollecting from "./EmailCollecting";
import { FormProvider, useForm } from "react-hook-form";
import FORM_INITIAL_DATA from "data/form_initial_data.json";
import Link from "next/link";
import { uploadImage } from "utils/uploadImage";
import axios from "axios";
import { useRouter } from "next/router";

const FillSiteForm: FC<{ site?: { id: number; data: TSite } }> = ({ site }) => {
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    defaultValues: site?.data || FORM_INITIAL_DATA,
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const modData: TSite = { ...data };

      modData.pricing.plans = modData.pricing.plans.map((p) => ({
        ...p,
        price: Number(p.price),
      }));

      const success = await new Promise(async (resolve, reject) => {
        try {
          if (typeof data.hero.background_image !== "string") {
            modData.hero.background_image = await uploadImage(
              data.hero.background_image
            );
          }

          if (typeof data.brand.logo !== "string") {
            modData.brand.logo = await uploadImage(data.brand.logo);
          }

          if (typeof data.brand.favicon !== "string") {
            modData.brand.favicon = await uploadImage(data.brand.favicon);
          }

          resolve(true);
        } catch (error) {
          reject(error);
        }
      });

      const images = await (async () => {
        const promises = data.features.items.map(async (feature: any) => {
          if (typeof feature.image !== "string") {
            return await uploadImage(feature.image);
          }
        });

        const images = await Promise.all(promises);

        return images;
      })();

      modData.features.items = modData.features.items.map((feature, index) => ({
        ...feature,
        image: images[index],
      }));

      console.log(modData.features.items);

      if (site?.id) {
        const res = await axios.put(`/api/site/${site.id}`, modData);
        if (res.data.success) {
          router.push(`/`);
          return;
        }
      }

      const res = await axios.post("/api/site", modData);

      if (res.data.success) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <Container
        onSubmit={methods.handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "grid", gap: 2 }}
      >
        <Box
          sx={{
            my: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: 600,
            }}
            component="h1"
            align="center"
          >
            {site ? "Edit Site" : "Create Site"}
          </Typography>
          <Link href="/">
            <Button variant="contained">Home</Button>
          </Link>
        </Box>

        <Brand />

        <Hero />

        <Features />

        <Pricing />

        <EmailCollecting />

        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Container>
    </FormProvider>
  );
};

export default FillSiteForm;
