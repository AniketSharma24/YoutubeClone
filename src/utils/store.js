import { configureStore } from '@reduxjs/toolkit';
import sidenavSlice from './sidenavSlice';
import selectedVideoSlice from './selectedVideoSlice';

const store = configureStore({
  reducer: {
    sidenav: sidenavSlice,
    selectedVideo: selectedVideoSlice,
  },
});

export default store;
