import { Site } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const siteSlice = createSlice({
  name: "sites",
  initialState: {
    sites: [] as Site[],
    loading: false,
    error: null,
  },
  reducers: {
    addSite: (state, action: PayloadAction<Site>) => {
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
    addInitialData: (state, action: PayloadAction<Site[]>) => {
      state.sites = action.payload;
    },
  },
});

export const { addSite, removeSite, updateSite, addInitialData } =
  siteSlice.actions;

export default siteSlice.reducer;
