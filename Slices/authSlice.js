import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initState = {
  isgetStarted: false,
};

const slice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setgetStatedClick: (state) => {
      state.isgetStarted = true;
    },
  },
});

export const { setgetStatedClick } = slice.actions;

export default slice.reducer;
