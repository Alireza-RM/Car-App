import { Link } from "react-router-dom"

import image14 from "../../img/image14.svg"
import image15 from "../../img/image15.svg"
import image16 from "../../img/image16.svg"


import { isLike } from "../features/carSlice"
import { useDispatch } from "react-redux"


const FixedMenuChild = ({id,name,title,img,litr,pepole,price,discount,like,st1,st2,st3,st4}) => {

    const dispatch = useDispatch()

    return ( <>
    <div className="w-full bg-white  rounded-xl ">
                <div className="flex p-4 flex-row justify-between items-start flex-1 ">
                    <div className="gap-y-2 flex flex-col">
                        <p className="text-lg font-bold">{name}</p>
                        <p className="text-slate-400 font-semibold text-sm">{title}</p>
                    </div>
                    <div>
                        <svg onClick={()=>dispatch(isLike(id))} 
                            className={`w-6 h-6 ${like&& "fill-red-600 stroke-orange-400"} cursor-pointer`} xmlns="http://www.w3.org/2000/svg" fill="none "
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor ">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                </div>

                <div className="p-4 flex flex-row sm:py-4 sm:flex-col sm:gap-y-5 sm:mb-0 justify-end relative  w-full">

                    <div className="relative flex flex-col items-center justify-center flex-auto py-3">
                        <div className="w-3/4  md:w-3/4">
                            <img src={img} alt="" className="w-full"/>
                        </div>
                        <div className="w-full h-2/4  z-10 bottom-0 left-0 right-0 bg-gradient-to-t from-white absolute">
                        </div>
                          <Link
                            to={`/detailescar/${id}`}
                            className="w-full h-full z-10 absolute">
                          </Link>
                    </div>


                    <div>
                        <div
                            className={`h-full flex flex-col sm:flex-row sm:items-center sm:gap-x-3 gap-y-2 items-start justify-between  w-full sm:justify-center ${st1}`}>
                            <div className="flex flex-row  items-center justify-start min-[1160px]:gap-x-[2px]">
                                <span
                                    className={`w-4 h-4 mr-1 min-[1160px]:mr-0 min-[1160px]:w-8 md:h-auto md:w-5 ${st2} flex-auto`}>
                                    <img src={image14} alt="" className="w-full"/>
                                </span>
                                <span
                                    className="font-medium text-slate-400 min-[1160px]:flex-auto h-auto min-[1160px]:w-full lg:text-xs">{litr}</span>
                            </div>

                            <div className="flex flex-row  items-center justify-start min-[1160px]:gap-x-[2px]">
                                <span
                                    className={`w-4 h-4 mr-1 min-[1160px]:mr-0 min-[1160px]:w-8 md:h-full md:w-5 ${st2} flex-auto`}>
                                    <img src={image15} alt="" className="w-full"/>
                                </span>
                                <span
                                    className="font-medium text-slate-400 min-[1160px]:flex-auto h-auto min-[1160px]:w-full lg:text-xs">Manual</span>
                            </div>

                            <div className="flex flex-row  items-center justify-start min-[1160px]:gap-x-[2px] ">
                                <span
                                    className={`w-4 h-4 mr-1 min-[1160px]:mr-0 min-[1160px]:w-8 md:h-auto md:w-5 ${st2} flex-auto`}>
                                    <img src={image16} alt="" className="w-full"/>
                                </span>
                                <span
                                    className={`font-medium text-[13px] min-[443px]:text-sm ${st3} text-slate-400 min-[1160px]:flex-auto h-auto min-[1160px]:w-full`}>{pepole}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-row justify-between p-4 items-center  h-auto w-full">
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-center">
                            <span className="text-xl font-bold">${price}/</span>
                            <span className="ml-1">day</span>
                        </div>
                        {discount&&<span className="text-slate-400 line-through">${discount}</span>}
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <button
                            className={`py-3 px-5 ${st4} bg-blue-600 hover:bg-blue-700 text-white rounded-md min-[500px]:text-lg xl:text-xl`}>
                            <Link to={`/rentalcar/${id}`}>Rental Car</Link>
                        </button>
                    </div>
                </div>
            </div>
    </> );
}
 
export default FixedMenuChild;