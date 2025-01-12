import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    removeFeed: (state, action) => null,
  },
});

export const { addFeed } = feedSlice.actions;
export default feedSlice.reducer;
