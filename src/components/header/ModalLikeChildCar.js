import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { isLike } from "../features/carSlice";

const ModalLikeChildCar = ({id,name,title,price,img,like,closeModal} ) => {

    

    const dispatch = useDispatch()

  return (
    <div className="flex flex-row gap-x-2 relative items-stretch border-y-2">
      <div className="flex flex-col w-2/4 sm:w-1/3 md:w-1/3 lg:w-1/4 justify-center0">
        <img src={img} alt="" className=" w-full h-full" />
      </div>

      <div className="flex flex-row justify-between  flex-auto px-1">
        <div className="flex flex-col gap-y-4 justify-between">
          <span className="font-bold text-base md:text-xl lg:text-lg xl:text-xl">
            {name}
          </span>
          <span className="text-slate-400 text-base">{title}</span>
        </div>
        <div className="flex flex-col gap-y-4 items-end justify-between">
          <span className="text-slate-400 text-base z-50">
                <svg onClick={()=>dispatch(isLike(id))} 
                            className={`w-6 h-6 ${like&& "fill-red-600 stroke-orange-400"} cursor-pointer`} xmlns="http://www.w3.org/2000/svg" fill="none "
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor ">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
          </span>
          <span className="font-bold  text-base md:text-2xl lg:text-xl xl:text-2xl">
            ${price}
          </span>
        </div>
      </div>
      <Link
        to={`/detailescar/${id}`}
        className="w-full h-full z-10 absolute"
        onClick={() => closeModal()}
      ></Link>
    </div>
  );
};

export default ModalLikeChildCar;
