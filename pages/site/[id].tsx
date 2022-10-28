import { Container, Box } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import SiteUtils, { TSite } from "prisma/site";
import FillSiteForm from "components/fill-site-form/Form";

const SiteEditForm: NextPage<{ site: { id: number; data: TSite } }> = ({
  site,
}) => {
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
        <FillSiteForm site={site} />
      </Box>
    </Container>
  );
};

export default SiteEditForm;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const id = params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const site = await SiteUtils.getOne(Number(id));

    return {
      props: {
        site,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
