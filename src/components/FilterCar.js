import { useSelector } from "react-redux";

import FixedMenuChild from "./homePage/FixedMenuChild";
import ShowMore from "./homePage/ShowMore";


import NavFilter from "./filterCar/NavFilter";
import DropDownFilter from "./filterCar/DropDownFilter";



const FilterCar = () => {

  const type= useSelector( state => state.carData.checkBoxType)
  const capacity= useSelector( state => state.carData.checkBoxCapacity)
  const range= useSelector( state => state.carData.checkBoxRange)
  const car = useSelector((state) => state.carData.dataCar)

  const newCar= car.filter(i => +i.price <=range 
    && i.checkCapacity.includes(Object.keys(capacity)[0]) 
    && i.checkType.includes(Object.keys(type)[0]) )
  

  return (
    <main className="2xl:max-w-screen-2xl mx-auto w-full lg:flex lg:flex-row">
      <nav className="bg-white w-1/4 p-6 h-auto hidden lg:flex">
        <NavFilter />
      </nav>

      <section className="lg:w-3/4">
        <DropDownFilter />

        <div className="px-6">
          <div className="w-full grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3">
            {newCar.map(car=><FixedMenuChild key={car.id} {...car} st1={"md:gap-x-5 xl:gap-x-2  min-[1160px]:gap-x-6"} st2={"lg:w-3"} st3={"lg:text-xs"} st4={"lg:px-2 lg:text-base"}/>)}
          </div>
        </div>
        <ShowMore url={"/"} text={"Home Page"}/>
      </section>
    </main>
  );
};

export default FilterCar;
