import { createSlice } from "@reduxjs/toolkit";
import { HomePage } from "./index";

const initialState = {
  animeList: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {},
});

export const {} = HomePageSlice.actions;
export default HomePageSlice.reducer;
