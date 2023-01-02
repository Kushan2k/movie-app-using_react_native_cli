import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initState = {
  movies: [],
  fav: [],
  loading: true,
};

const slice = createSlice({
  name: "movieSlice",
  initialState: initState,
});

export default slice.reducer;
