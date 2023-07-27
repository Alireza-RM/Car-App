import NavFilter from "./filterCar/NavFilter";
import ImagesDetailes from "./detailesCar/ImagesDetailes";
import TextDetailes from "./detailesCar/TextDetailes";
import ScrollMenu from "./homePage/ScrollMenu";
import CommentDetailes from "./detailesCar/CommentDetailes";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailesCar = () => {

  const pp = useParams().id
  const carData =useSelector(state => state.carData.dataCar)
  const dataCarParams = carData.find(i => i.id === +pp )

  // console.log(dataCarParams)

  return (
    <main className="2xl:max-w-screen-2xl mx-auto w-full lg:flex lg:flex-row">
      <nav className="2xl:border-y-2 bg-white w-1/4 p-6 h-auto hidden lg:flex">
        <NavFilter />
      </nav>

      <section className="lg:w-3/4">
        <div className="flex flex-col p-6 gap-y-6 md:flex-row gap-x-4 ">
          {/* image */}
          <ImagesDetailes {...dataCarParams}/>
          {/* text */}
          <TextDetailes {...dataCarParams}/>
        </div>

        <div className="p-6">
          <CommentDetailes />
        </div>

        <div className="flex flex-col gap-y-6">
          <ScrollMenu numberSliceEnd={3} />
          <ScrollMenu
            numberSliceStart={4}
            numberSliceEnd={7}
            titleCar="Recomendation Car"
          />
        </div>
      </section>
    </main>
  );
};

export default DetailesCar;
