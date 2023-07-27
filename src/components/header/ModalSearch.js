import ModalSearchCar from "./ModalSearchCar";
import { useSelector } from "react-redux";
import { useState } from "react";

const ModalSearch = ({closeModal}) => {

    const [value,setValue] = useState("")
    const car = useSelector(state => state.carData.dataCar)
    const newCar = car.filter(i => 
        i.name.toLowerCase().includes(value.toLowerCase().trim())&&
        value.toLowerCase().trim().length>0)

 

    const searchHandler = (event) => {
        setValue(event.target.value)
    }

  return (
    <div className="w-[95%] sm:w-[75%] h-[80vh] gap-y-4 mx-auto bg-white absolute top-20 z-40 p-2 flex flex-col">
      <div className="flex items-center gap-x-1">
        <div className=" w-8 h-full flex items-center justify-center ">
          <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
        </div>
        <input type="text" placeholder="Search Car" value={value} className="border-none focus:ring-0  w-full rounded-2xl" onChange={searchHandler}/>
        <div className=" w-8 h-full">
          <svg onClick={() => closeModal()}  className="w-full h-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </div>
     </div>



      <div className="flex flex-col gap-y-6 overflow-y-scroll">
        {value.toLowerCase().trim().length === 0 && 
        <div className="h-64 flex items-center justify-center  w-full">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-blue-500">Search for the car you want</h1>
        </div>
        }
        {newCar.length === 0&&value.toLowerCase().trim().length !== 0 &&
        <div className="h-64 flex items-center justify-center w-full">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-red-500">Not Valid Car</h1>
        </div>
        }
        {/* {newCar.length === 0&&value.toLowerCase().trim().length !== 0?<p>The machine name is not valid</p>:null} */}
        {newCar.map(i => <ModalSearchCar key={i.id} {...i} closeModal={closeModal}/>)}
      </div>
    </div>
  );
};

export default ModalSearch;
