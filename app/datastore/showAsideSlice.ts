import { createSlice } from "@reduxjs/toolkit";

interface Imobnav {
  value: {
    mobNav: boolean;
    mobsidebar: boolean;
  };
}
const initialState: Imobnav = {
  value: {
    mobNav: false,
    mobsidebar: false,
  },
};

const showasideSlice = createSlice({
  name: "showAside",
  initialState,
  reducers: {
    toggleMobNav: (state) => {
      state.value.mobNav = !state.value.mobNav;
      state.value.mobsidebar = false;
    },
    togglemobsidebar: (state) => {
      state.value.mobsidebar = !state.value.mobsidebar;
      state.value.mobNav = false;
    },
  },
});

export const { toggleMobNav,togglemobsidebar } = showasideSlice.actions;
export default showasideSlice.reducer;
