import { FC, useState } from "react";
import { SiteData } from "prisma/site";
import { Card, Box, Typography, Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "app/store";
import { removeSite } from "app/features/sitesSlice";

const SiteCard: FC<{ site: SiteData; id: number }> = ({ site, id }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/site/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        dispatch(removeSite(id));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      sx={(theme) => ({
        my: 2,
        p: 2,
        gap: 2,
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "1fr 1fr",
        },
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "1fr",
        },
      })}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "20rem",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Image src={site.brand.logo} layout="fill" objectFit="cover" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography>{site.brand.name}</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button disabled={loading} color="error" onClick={handleDelete}>
            {loading ? (
              <CircularProgress sx={{ width: 24, height: 24 }} />
            ) : (
              "Delete"
            )}
          </Button>
          <Link href={`/site/${id}`} passHref>
            <Button disableElevation>Edit</Button>
          </Link>
          <Link href={`/preview/${id}`} passHref>
            <Button variant="contained" disableElevation>
              Preview
            </Button>
          </Link>
        </Box>
      </Box>
    </Card>
  );
};

export default SiteCard;
