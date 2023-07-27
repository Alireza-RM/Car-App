import BoxRight from "./rentalCar/BoxRight";
import BoxLeft from "./rentalCar/BoxLeft";

const RentalCar = () => {

  return (
    <main className="2xl:max-w-screen-2xl mx-auto">
      <div className="w-full  p-6 flex flex-col lg:flex-row gap-y-8 lg:gap-x-5">
        <BoxRight/>
        <BoxLeft/>
      </div>
    </main>
  );
};

export default RentalCar;
