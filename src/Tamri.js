import Child from "./components/Child";
// import CCC from "./components/CCC";
import FFF from "./components/FFF";

const Tamri = () => {
  return (
    <main className="2xl:max-w-screen-2xl mx-auto">
      <div className="w-full  p-6 flex flex-col lg:flex-row gap-y-8 lg:gap-x-5">
        <Child/>
        <FFF/>
      </div>
    </main>
  );
};

export default Tamri;
