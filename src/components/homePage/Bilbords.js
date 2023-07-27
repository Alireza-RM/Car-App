import { useState } from "react";

import image9 from "../../img/image9.svg";
// import image10 from "./img/image10.svg";
import image10 from "../../img/image10.svg"

// import Bilbord from "./components/homePage/Bilbord";
import BilbordChild from "./BilbordChild";

const Bilbords = () => {
  const [bilbords] = useState([
    {
      textTopUp: "The Best Platform",
      textTopDown: "for Car Rental",
      textCenterTop: "Ease of doing a car rental safely and",
      textCenterDown: "reliably. Of course at a low price.",
      textButton: "Rental Car",
      colorButton: "bg-blue-600 hover:bg-blue-700",
      image: image9,
      sizeImage:"md:w-9/12",
      bg: "bg-left-bg",
      id: 1,
    },
    {
      textTopUp: "Easy way to rent a",
      textTopDown: "car at a low price",
      textCenterTop: "Providing cheap car rental services",
      textCenterDown: "and safe and comfortable facilities.",
      textButton: "Rental Car",
      colorButton: "bg-blue-400 hover:bg-blue-500",
      image: image10,
      sizeImage:"md:w-2/3",
      bg: "bg-right-bg",
      id: 2,
    },
  ]);

  return (
    <main className="2xl:max-w-screen-2xl mx-auto">
      <div className="w-full p-6 flex flex-col gap-y-3 lg:flex-row lg:gap-y-0 lg:gap-x-3">
        {bilbords.map((item) => (
          <BilbordChild key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
};

export default Bilbords;
