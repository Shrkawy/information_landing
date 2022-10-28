import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import SiteControllers, { TSite } from "../prisma/site";
import { Card, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import SiteCard from "components/SiteCard";
import { useEffect } from "react";
import { addInitialData } from "app/features/sitesSlice";
import { useAppDispatch, useAppSelector } from "app/store";

const Home: NextPage<{
  sites: {
    id: number;
    data: TSite;
  }[];
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
        <SiteCard id={site.id} site={site.data} key={site.id} />
      ))}
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allSites = await SiteControllers.getMany();

  return {
    props: {
      sites: allSites || [],
    },
  };
};
