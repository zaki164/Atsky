import { configureStore } from "@reduxjs/toolkit";
import WidgetsReducer from "./WidgetsReducer";

const store = configureStore({
  reducer: WidgetsReducer
});

export default store;