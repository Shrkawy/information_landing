import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState, useMemo, FC } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

const thumbsContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

const thumb: SxProps<Theme> = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",

  width: 250,
  height: 250,
  boxSizing: "border-box",
};

const thumbInner: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
};

interface Props {
  name: string;
  title: string;
}

const UploadImage: FC<Props> = ({ name, title }) => {
  const { setValue, getValues } = useFormContext();
  const [file, setFile] = useState<File & { preview: string }>();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop: async (acceptedFiles: File[]) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
      setValue(name, acceptedFiles[0], {
        shouldDirty: true,
      });
    },
  });

  const thumbs = useMemo(
    () =>
      file?.preview ? (
        <Box sx={thumb} key={file.name}>
          <Box sx={thumbInner}>
            <Image
              layout="fill"
              objectFit="contain"
              src={file.preview}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </Box>
        </Box>
      ) : (
        getValues(name) && (
          <Box sx={thumb} key={getValues(name)}>
            <Box sx={thumbInner}>
              <Image layout="fill" objectFit="contain" src={getValues(name)} />
            </Box>
          </Box>
        )
      ),
    [file]
  );

  useEffect(() => {
    return () => (file ? URL.revokeObjectURL(file.preview) : undefined);
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="button" component="div">
          {title}
        </Typography>
        <Button size="small" disableElevation>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            Click to select Image
          </div>
        </Button>
      </Box>
      <Box sx={thumbsContainer}>{thumbs}</Box>
    </Box>
  );
};

export default UploadImage;
