import { createSlice } from '@reduxjs/toolkit';

const sidenavSlice = createSlice({
  name: 'sidenav',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = sidenavSlice.actions;

export default sidenavSlice.reducer;
