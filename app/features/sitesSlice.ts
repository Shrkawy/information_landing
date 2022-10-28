import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSite } from "prisma/site";

interface SitePayload {
  id: number;
  data: TSite;
}

const siteSlice = createSlice({
  name: "sites",
  initialState: {
    sites: [] as SitePayload[],
    loading: false,
    error: null,
  },
  reducers: {
    addSite: (state, action: PayloadAction<SitePayload>) => {
      state.sites.push(action.payload);
    },
    removeSite: (state, action) => {
      state.sites = state.sites.filter((site) => site.id !== action.payload);
    },
    updateSite: (state, action) => {
      state.sites = state.sites.map((site) =>
        site.id === action.payload.id ? action.payload : site
      );
    },
    addInitialData: (state, action: PayloadAction<SitePayload[]>) => {
      state.sites = action.payload;
    },
  },
});

export const { addSite, removeSite, updateSite, addInitialData } =
  siteSlice.actions;

export default siteSlice.reducer;
