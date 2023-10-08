import { createSlice } from '@reduxjs/toolkit';

const selectedVideoSlice = createSlice({
  name: 'selectedVideo',
  initialState: {
    video: {},
  },
  reducers: {
    setSelectedVideo: (state, action) => {
      state.video = action.payload;
    },
    resetSelectedVideo: (state) => {
      state.video = {};
    },
  },
});

export const { setSelectedVideo, resetSelectedVideo } =
  selectedVideoSlice.actions;

export default selectedVideoSlice.reducer;
