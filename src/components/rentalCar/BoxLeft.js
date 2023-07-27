// import B1 from "./B1";
// import B2 from "./B2";
// import B3 from "./B3";
// import B4 from "./B4";

import BoxLeftOne from "./BoxLeftOne";
import BoxLeftTow from "./BoxLeftTow";
import BoxLeftThree from "./BoxLeftThree";
import BoxLeftFour from "./BoxLeftFour";

const BoxLeft = () => {
  return (
    <div className="lg:w-full lg:order-1">
      <div className="flex flex-col gap-y-8">
        <BoxLeftOne/>
        <BoxLeftTow/>
        <BoxLeftThree/>
        <BoxLeftFour/>
      </div>
    </div>
  );
};

export default BoxLeft;