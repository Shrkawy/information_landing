import axios from "axios";

const NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;

if (
  !NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ||
  !NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
) {
  throw new Error("Missing Cloudinary env variables");
}

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

  try {
    const res = await axios.post(NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL, formData);
    return res.data.url;
  } catch (error) {
    console.error(error);
    throw new Error("Error uploading image");
  }
};
