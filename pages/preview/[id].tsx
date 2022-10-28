import LandingPage from "components/landing";
import { GetServerSideProps, NextPage } from "next";
import SiteControllers, { TSite } from "prisma/site";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

const Preview: NextPage<{ data: TSite; id: number }> = ({ data, id }) => {
  console.log(data);
  return (
    <Box
      sx={{
        pb: 8,
      }}
    >
      <LandingPage data={data} />
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            You're in Preview mode
          </Typography>
          <Box
            sx={{
              ml: "auto",
            }}
          >
            <Link href={`/site/${id}`} passHref>
              <MuiLink
                sx={{
                  ml: 2,
                }}
              >
                Edit
              </MuiLink>
            </Link>
            <Link href="/" passHref>
              <MuiLink
                sx={{
                  ml: 2,
                }}
                color="error.main"
              >
                Exit Preview
              </MuiLink>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Preview;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const id = params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const site = await SiteControllers.getOne(Number(id));
    return {
      props: {
        data: site.data,
        id,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
