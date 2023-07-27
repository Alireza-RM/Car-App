import { useState } from "react";

import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { isLike } from "../features/carSlice";


const TextDetailes = ({id,name,title,like,litr,pepole,price,discount}) => {

    const dispatch = useDispatch()


    const [star]=useState([1,2,3,4,5])
    return ( 
        <div className=" flex flex-col p-4 gap-y-4 bg-white rounded-lg md:w-full ">

                    <div className="flex  flex-row justify-between items-start">
                        <div className="gap-y-1 flex flex-col">
                            <p className="text-lg sm:text-xl font-bold lg:text-2xl">{name}</p>
                            <div className="flex flex-row items-center gap-x-2">
                                <div className="flex flex-row">
                                    {star.map(i  => <span key={i} className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor"
                                            className="w-4 h-4 fill-yellow-400 stroke-none">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        </span>)}
                                </div>
                                <p className="text-slate-400">440+ Reviewer</p>
                            </div>
                        </div>
                        <div className="hidden md:flex ">
                            <svg onClick={()=>dispatch(isLike(id))} 
                                className={`w-6 h-6 ${like&& "fill-red-600 stroke-orange-400"} cursor-pointer`} xmlns="http://www.w3.org/2000/svg" fill="none "
                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor ">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                 d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                    </div>


                    <div className="flex flex-col gap-y-2 flex-auto justify-center">
                        <p className="text-slate-400 text-xs sm:text-sm min-[888px]:text-base lg:text-sm xl:text-lg">NISMO
                            has become the embodiment of Nissan's</p>
                        <p className="text-slate-400 text-xs sm:text-sm min-[888px]:text-base lg:text-sm xl:text-lg">
                            outstanding performance, inspired by the most</p>
                        <p className="text-slate-400 text-xs sm:text-sm min-[888px]:text-base lg:text-sm xl:text-lg">
                            unforgiving proving ground, the "race track".</p>
                    </div>

                    <div className="flex flex-col gap-y-4 my-2 flex-auto justify-center">
                        <div className="flex flex-row justify-between gap-x-10 sm:gap-x-[140px] md:gap-x-10 xl:gap-x-16">
                            <span className="flex flex-row  gap-x-0 flex-auto justify-between">
                                <div className="">
                                    <p className="text-sm sm:text-base xl:text-lg text-slate-400">Type Car</p>
                                </div>
                                <div className="pl-[15px] sm:pl-[20px] xl:pl-[25px]">
                                    <p className="text-sm sm:text-base xl:text-lg font-semibold">{title}</p>
                                </div>
                            </span>
                            <span className="flex flex-row gap-x-0 flex-auto justify-between">
                                <div className="">
                                    <p className="text-sm sm:text-base xl:text-lg text-slate-400">Capacity</p>
                                </div>
                                <div className="">
                                    <p className="text-sm sm:text-base xl:text-lg font-semibold">{pepole}</p>
                                </div>
                            </span>
                        </div>

                        <div className="flex flex-row justify-between gap-x-10 sm:gap-x-[140px] md:gap-x-10 xl:gap-x-16">
                            <span className="flex flex-row gap-x-0 flex-auto justify-between">
                                <div className="">
                                    <p className="text-sm sm:text-base xl:text-lg text-slate-400">Steering</p>
                                </div>
                                <div className="">
                                    <p className="text-sm sm:text-base xl:text-lg font-semibold">Manual</p>
                                </div>
                            </span>
                            <span className="flex flex-row gap-x-0 flex-auto justify-between">
                                <div className="pr-[23px]">
                                    <p className="text-sm sm:text-base xl:text-lg text-slate-400">Gasoline</p>
                                </div>
                                <div className="">
                                    <p className="text-sm sm:text-base xl:text-lg font-semibold">{litr}</p>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center   h-auto w-full ">
                        <div className="flex flex-col items-start justify-start">
                            <div className="flex flex-row items-center justify-center">
                              <span className="text-xl font-bold">${price}/</span>
                              <span className="ml-1">day</span>
                            </div>
                        {discount&&<span className="text-slate-400 line-through">${discount}</span>}
                        </div>
                        <Link to={`/rentalcar/${id}`} className=" flex flex-col justify-center items-center">
                            <button
                                className=" py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-md min-[500px]:text-lg xl:text-xl">Rental
                                Car</button>
                        </Link>
                    </div>

                </div>
     );
}
 
export default TextDetailes;