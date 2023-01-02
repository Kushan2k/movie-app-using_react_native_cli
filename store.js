import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/authSlice";
import MovieReducer from "./Slices/movieSlice";

export default store = configureStore({
  reducer: {
    authReducer: AuthReducer,
    movieReducer: MovieReducer,
  },
});
