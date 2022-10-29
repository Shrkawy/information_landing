import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import SiteControllers, { SiteData } from "prisma/site";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import SiteCard from "components/SiteCard";
import { useEffect } from "react";
import { addInitialData } from "app/features/sitesSlice";
import { useAppDispatch, useAppSelector } from "app/store";
import { Site } from "@prisma/client";

const Home: NextPage<{
  sites: Site[];
}> = ({ sites: initialSites }) => {
  const dispatch = useAppDispatch();
  const { sites } = useAppSelector((state) => state.sites);

  useEffect(() => {
    dispatch(addInitialData(initialSites));
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            my: 4,
            fontSize: "3rem",
            fontWeight: 600,
          }}
        >
          Your Sites
        </Typography>
        <Link href="/site">
          <Button variant="contained">Create Site</Button>
        </Link>
      </Box>

      {sites.map((site) => (
        <SiteCard id={site.id} site={site.data as SiteData} key={site.id} />
      ))}

      {sites.length === 0 && (
        <Typography
          sx={{
            my: 4,
            fontSize: "2rem",
            fontWeight: 600,
          }}
        >
          You have no sites yet. Create one!
        </Typography>
      )}
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let allSites: Site[] = [];
  try {
    allSites = await SiteControllers.getMany();
  } catch (error) {
    console.error("Get Sites Data Error: ", error);
  }

  return {
    props: {
      sites: allSites,
    },
  };
};
