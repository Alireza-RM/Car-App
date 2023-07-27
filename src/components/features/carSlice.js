import { createSlice } from "@reduxjs/toolkit";

import image17 from "../../img/image17.svg";
import image18 from "../../img/image18.svg";
import image19 from "../../img/image19.svg";
import image20 from "../../img/image20.svg";
import image21 from "../../img/image21.svg";
import image22 from "../../img/image22.svg";
import image23 from "../../img/image23.svg";
import image24 from "../../img/image24.svg";
import image25 from "../../img/image25.svg";
import image26 from "../../img/image26.svg";

const initialState = {
  dataCar: [
    {
      id: 1,
      like: false,
      name: "Koenigsegg",
      title: "Sport",
      img: image17,
      litr: " 90L ",
      pepole: " 2 People ",
      price: "99.00",
      discount: false,
      checkType:"Sport All",
      checkCapacity:"Person2 All",
    },
    {
      id: 2,
      like: false,
      name: "Nissan GT - R",
      title: "Sport",
      img: image18,
      litr: "80L",
      pepole: " 2 People ",
      price: "80.00",
      discount: "100.00",
      checkType:"Sport All",
      checkCapacity:"Person2 All",
    },
    {
      id: 3,
      like: false,
      name: "Rolls - Royce",
      title: "Sedan",
      img: image19,
      litr: "70L",
      pepole: " 4 People",
      price: "96.00",
      discount: false,
      checkType:"Sedan All",
      checkCapacity:"Person4 All",
    },
    {
      id: 4,
      like: false,
      name: "Nissan GT - R",
      title: "Sport",
      img: image18,
      litr: "80L",
      pepole: " 2 People ",
      price: "80.00",
      discount: "100.00",
      checkType:"Sport All",
      checkCapacity:"Person2 All",
    },
    {
      id: 5,
      like: false,
      name: "All New Rush",
      title: "SUV",
      img: image20,
      litr: "70L",
      pepole: " 6 People ",
      price: "72.00",
      discount: "80.00",
      checkType:"SUV All",
      checkCapacity:"Person6 All",
    },
    {
      id: 6,
      like: false,
      name: "CR - V",
      title: "SUV",
      img: image21,
      litr: "80L",
      pepole: " 6 People ",
      price: "80.00",
      discount: false,
      checkType:"SUV All",
      checkCapacity:"Person6 All",
    },
    {
      id: 7,
      like: false,
      name: "All New Terios",
      title: "SUV",
      img: image22,
      litr: " 90L ",
      pepole: " 6 People ",
      price: "74.00",
      discount: false,
      checkType:"SUV All",
      checkCapacity:"Person6 All",
    },
    {
      id: 8,
      like: false,
      name: "CR - V",
      title: "SUV",
      img: image23,
      litr: "80L",
      pepole: " 6 People ",
      price: "80.00",
      discount: false,
      checkType:"SUV All",
      checkCapacity:"Person6 All",
    },
    {
      id: 9,
      like: false,
      name: "MG ZX Exclusice",
      title: "Hatchback",
      img: image24,
      litr: "70L",
      pepole: " 4 People ",
      price: "76.00",
      discount: "80.00",
      checkType:"Hatchback All",
      checkCapacity:"Person4 All",
    },
    {
      id: 10,
      like: false,
      name: "New MG ZS",
      title: "SUV",
      img: image25,
      litr: "80L",
      pepole: " 6 People ",
      price: "80.00",
      discount: false,
      checkType:"SUV All",
      checkCapacity:"Person6 All",
    },
    {
      id: 11,
      like: false,
      name: "MG ZX Exclusice",
      title: "Hatchback",
      img: image26,
      litr: " 90L ",
      pepole: " 4 People ",
      price: "74.00",
      discount: false,
      checkType:"Hatchback All",
      checkCapacity:"Person4 All",
    },
    {
      id: 12,
      like: false,
      name: "New MG ZS",
      title: "SUV",
      img: image25,
      litr: "80L",
      pepole: " 6 People ",
      price: "80.00",
      discount: false,
      checkType:"SUV All",
      checkCapacity:"Person6 All",
    },
  ],
  checkBoxType: { All: true },
  checkBoxCapacity: { All: true },
  checkBoxRange: 100,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    isLike: (state, action) => {
      const newfilter = state.dataCar.find((i) => i.id === action.payload);
      newfilter.like = !newfilter.like;
    },
    isCheckedType: (state, action) => {
      // event.target.checked
      //   ? setValue({ [event.target.name]: event.target.checked })
      //   : setValue({ All: true });
      action.payload.checked
        ? (state.checkBoxType = {
            [action.payload.name]: action.payload.checked,
          })
        : (state.checkBoxType = { All: true });
    },
    isCheckBoxCapacity: (state, action) => {
      action.payload.checked
        ? (state.checkBoxCapacity = {
            [action.payload.name]: action.payload.checked,
          })
        : (state.checkBoxCapacity = { All: true });
    },
    isCheckedRange: (state, action) => {
      state.checkBoxRange = action.payload;
    },
  },
});

export default carSlice.reducer;
export const { isLike, isCheckedType, isCheckBoxCapacity, isCheckedRange } =
  carSlice.actions;
