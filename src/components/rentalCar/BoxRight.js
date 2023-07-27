// import CCC from "./CCC";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import BoxRightTop from "./BoxRightTop";
import BoxRightBottom from "./BoxRightBottom";

// import NNN from "./NNN";
const BoxRight = () => {

  const parmsId = useParams().id
  const data = useSelector(state => state.carData.dataCar)
  const newData = data.find(i => i.id === +parmsId )
  

  return (
    <div className="lg:w-full lg:order-2">
      <div className="bg-white p-4 flex flex-col rounded-xl ">
        <BoxRightTop {...newData}/>
        <BoxRightBottom {...newData}/>
      </div>
    </div>
  );
};

export default BoxRight;