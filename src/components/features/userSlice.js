import { createSlice } from "@reduxjs/toolkit";

import image from "../../img/image.svg";
import image30 from "../../img/image30.svg";

const initialState = {
  commentUser: [
    {
      id: "1",
      img: image,
      name: "Alex Stanton",
      job: "CEO at Bukalapak",
      date: "21 July 2022",
      textComment:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      id: "2",
      img: image30,
      name: "Skylar Dias",
      job: "CEO at Amazon",
      date: "20 July 2022",
      textComment:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      id: "3",
      img: image,
      name: "Alex Stanton",
      job: "CEO at Bukalapak",
      date: "21 July 2022",
      textComment:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
