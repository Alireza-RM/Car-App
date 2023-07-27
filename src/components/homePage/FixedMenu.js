import { useSelector } from "react-redux";

import FixedMenuChild from "./FixedMenuChild";

const FixedMenu = () => {
  const car = useSelector((state) => state.carData.dataCar);

  return (
    <div className="px-6">
      <div className="flex  py-4 flex-row justify-start items-center min-[805px]:px-4">
        <p className="text-slate-400 font-medium">Recomendation Car</p>
      </div>

      <div className="w-full grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
        {car.slice(4,12).map(car=><FixedMenuChild key={car.id} {...car} st1={""} st2={""} st3={""} st4={""}/>)}
      </div>
    </div>
  );
};

export default FixedMenu;
