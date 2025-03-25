import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"; // Ensure correct path

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
