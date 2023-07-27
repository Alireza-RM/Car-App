import { configureStore } from "@reduxjs/toolkit";

import carSlice from "../features/carSlice";
import userSlice from "../features/userSlice";
import validateFormSlice from "../features/validateFormSlice";
import navbarSlice from "../features/navbarSlice";

const store = configureStore({
  reducer: {
    carData: carSlice,
    userData: userSlice,
    validateData: validateFormSlice,
    NavData: navbarSlice,
  },
});

export default store;
