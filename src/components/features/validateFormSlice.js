import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  box1: { name: "", address: "", phoneNumber: "", townCity: "" },
  box2: { city1: "default", time1: "default", date1: "default", city2: "default", time2: "default", date2: "default" },
  box3: { cardNumber: "", cardHolder: "", exprationDate: "", cvc: "" },
  box3button: {},
  box4button: {},
  onFocousInputBox1:{ name: false, address: false, phoneNumber:false, townCity: false },
  onFocousInputBox3:{ cardNumber: false, cardHolder: false, exprationDate:false, cvc: false },
  box2valid: false,
  box3buttonvalid: false,
  box4buttonvalid: false,
};

const validateFormSlice = createSlice({
  name: "validateForm",
  initialState,
  reducers: {
    changeBox1: (state, action) => {
      state.box1 = {
        ...state.box1,
        [action.payload.name]: action.payload.value,
      };
    },
    changeBox2: (state, action) => {
      state.box2 = {
        ...state.box2,
        [action.payload.name]: action.payload.value,
      };
    },
    changeBox3: (state, action) => {
      state.box3 = {
        ...state.box3,
        [action.payload.name]: action.payload.value,
      };
    },
    changeBox3Button: (state, action) => {
      action.payload.checked
        ? (state.box3button = { [action.payload.name]: action.payload.checked })
        : (state.box3button = {});
    },
    changeBox4Button: (state, action) => {
      action.payload.checked
        ? (state.box4button = {...state.box4button , [action.payload.name]: action.payload.checked })
        : delete state.box4button[action.payload.name]
   },
   isOnFocousInputBox1:(state,action) => {
      state.onFocousInputBox1 = {...state.onFocousInputBox1,[action.payload]:true}
   },
   isOnFocousInputBox3:(state,action) => {
    state.onFocousInputBox3 = {...state.onFocousInputBox3,[action.payload]:true}
  },
  toastValid:(state,action)=>{
    state.box2valid = true
    state.box3buttonvalid = true
    state.box4buttonvalid = true
    state.onFocousInputBox1= { name: true, address: true, phoneNumber:true, townCity: true }
    state.onFocousInputBox3= { cardNumber: true, cardHolder: true, exprationDate:true, cvc: true }
  }
}});

export default validateFormSlice.reducer;
export const {
  changeBox1,
  changeBox2,
  changeBox3,
  changeBox3Button,
  changeBox4Button,
  isOnFocousInputBox1,
  isOnFocousInputBox3,
  toastValid} = 
  validateFormSlice.actions;
