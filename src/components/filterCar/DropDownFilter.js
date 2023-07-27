import { useState } from "react";

import DropDownFilterChild from "./DropDownFilterChild";
// import { dropDown } from "../homePage/DropDown";

const DropDownFilter = () => {

    const [dropDown] = useState([
        {
          colorRoundTitle: "bg-indigo-200",
          colorTitle: "bg-indigo-500",
          title: "Pick - Up",
          location: "Semarang",
          date: "20 July 2022",
          time: "07.00",
        },
        {
          colorRoundTitle: "bg-blue-200",
          colorTitle: "bg-blue-400",
          title: "Drop - Off",
          location: "Semarang",
          date: "21 July 2022",
          time: "01.00",
        },
      ])
    return ( 
        <div className="w-full p-6 flex flex-col md:flex-row md:gap-x-0 min-[805px]:gap-x-5 lg:gap-x-0">

            <DropDownFilterChild tailw={""} {...dropDown[0]} />
            
                <div
                    className="flex items-center justify-center py-1 z-10 relative bottom-3 -mb-6 lg:-left-3 md:bottom-0 md:mb-0  ">
                    <button
                        className="flex items-center justify-center bg-blue-600 w-16 h-16 z-10 rounded-xl shadow-2xl shadow-blue-400 lg:shadow-2xl lg:shadow-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                    </button>
                </div>

           <DropDownFilterChild tailw={"lg:pl-6 lg:-ml-6"} {...dropDown[1]}/>
            
        </div>
    );
}


 
export default DropDownFilter;