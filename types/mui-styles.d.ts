import { Theme } from "@mui/material/styles";
import INITIAL_SITE from "../src/data/form_initial_data.json";

declare module "@mui/styles" {
  interface DefaultTheme extends Theme {}
}
