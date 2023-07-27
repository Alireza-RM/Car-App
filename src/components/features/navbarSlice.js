import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  loc:"",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeLocation:(state,action) => {
        state.loc = action.payload
    }
  },
});

export default navbarSlice.reducer;
export const {changeLocation} = navbarSlice.actions
