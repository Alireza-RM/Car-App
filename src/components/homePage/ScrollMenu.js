import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import Child from "./components/Child";
import ScrollMenuChild from "./ScrollMenuChild";

const ScrollMenu = ({numberSliceStart=0,numberSliceEnd = 4,titleCar="Popular Car"}) => {


  const car = useSelector(state => state.carData.dataCar)


  return (
    <div className="relative">
      <div className="flex px-6 py-2 flex-row justify-between items-center min-[805px]:px-10">
        <p className="text-slate-400 font-medium">{titleCar}</p>
        <p className="text-blue-600 font-medium"><Link to="/filtercar">View All</Link></p>
      </div>

      <div className="w-1/12 h-[333px] min-[1160px]:h-[347px] z-10 bottom-2 right-0 bg-gradient-to-l from-white absolute opacity-[0.8] min-[1405px]:hidden"></div>

      <div className="w-full px-6 py-2 whitespace-nowrap overflow-x-scroll snap-x snap-mandatory flex flex-row gap-x-5 relative cursor-grab min-[1405px]:cursor-auto">
        {car.slice(numberSliceStart,numberSliceEnd).map((car) => (
          <ScrollMenuChild key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default ScrollMenu;
