import { useSelector } from "react-redux";

import ModalLikeChildCar from "./ModalLikeChildCar";

const ModalLikeChild = ({closeModal}) => {

    const carLike = useSelector(state => state.carData.dataCar)
    const newCar = carLike.filter(i => i.like === true)

  return (
    <div className="w-[95%] sm:w-[75%] h-[80vh] gap-y-4 mx-auto overflow-y-scroll bg-white absolute top-20 z-40 p-6 flex flex-col">
        <div className=" w-full h-8 flex justify-end">
          <svg onClick={() => closeModal()}  className="w-8 h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </div>
        {newCar.length === 0 && 
            <div className="h-64 flex items-center justify-center  w-full">
                <div className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-blue-500 flex items-start gap-x-2"> 
                 <h1 className="flex items-center cursor-default">There is no</h1>
                 <span className="flex w-16 h-16 items-center">
                  <svg  
                      className="w-14 h-14 fill-red-600 stroke-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none "
                      viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor ">
                      <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                 </svg>
                 </span>
                </div>
            </div>
        }
        {newCar.map(i =><ModalLikeChildCar key={i.id} {...i}  closeModal={closeModal}/>)}
        
    </div>
  );
};

export default ModalLikeChild;
