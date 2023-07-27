import image39 from "../../img/image39.svg"
import image40 from "../../img/image40.svg"
import image41 from "../../img/image41.svg"
import image42 from "../../img/image42.svg"
import image43 from "../../img/image43.svg"



const BottomRightPanel = () => {

    return ( 
        <div className="lg:w-full lg:flex-auto flex flex-col gap-y-8  xl:justify-between">


                    {/* <!-- top --> */}
                    <div className="flex flex-col gap-y-3 md:gap-y-8 p-4 bg-white rounded-md">


                        <div className="flex flex-row justify-between items-center">
                            <span className="font-bold md:text-lg lg:text-xl xl:text-2xl">Top 5 Car Rental</span>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </span>
                        </div>




                        <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-8 lg:gap-x-4 md:justify-between">


                            {/* <!-- circle --> */}
                            <div className="flex flex-col items-center">
                                <span className="relative flex flex-col justify-center items-center">
                                    <img src={image39} alt=""/>
                                    <span className="flex flex-col justify-center items-center absolute ">
                                        <span className="font-bold text-3xl lg:text-2xl xl:text-3xl">72,030</span>
                                        <span className="text-slate-400 text-sm lg:text-base">Rental Car</span>
                                    </span>
                                </span>
                            </div>



                            {/* <!-- list --> */}
                            <div className="flex flex-col gap-y-2 md:flex-auto md:justify-between">

                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-x-3 items-center">
                                        <span className="rounded-full w-3 h-3 bg-slate-700"></span>
                                        <span className="text-slate-400">Sport Car</span>
                                    </div>
                                    <span className="font-bold">17,439</span>
                                </div>

                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-x-3 items-center">
                                        <span className="rounded-full w-3 h-3 bg-sky-700"></span>
                                        <span className="text-slate-400">SUV</span>
                                    </div>
                                    <span className="font-bold">9,478</span>
                                </div>

                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-x-3 items-center">
                                        <span className="rounded-full w-3 h-3 bg-sky-600"></span>
                                        <span className="text-slate-400">Coupe</span>
                                    </div>
                                    <span className="font-bold">18,197</span>
                                </div>

                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-x-3 items-center">
                                        <span className="rounded-full w-3 h-3 bg-blue-400"></span>
                                        <span className="text-slate-400">Hatchback</span>
                                    </div>
                                    <span className="font-bold">12,510</span>
                                </div>

                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-x-3 items-center">
                                        <span className="rounded-full w-3 h-3 bg-blue-200"></span>
                                        <span className="text-slate-400">MPV</span>
                                    </div>
                                    <span className="font-bold">14,406</span>
                                </div>

                            </div>




                        </div>

                    </div>





                    {/* <!-- bottom --> */}
                    <div className="bg-white rounded-md p-4 flex flex-col gap-y-5">

                        <div className="flex flex-row justify-between items-center">
                            <span className="font-bold md:text-lg lg:text-xl xl:text-2xl">Recent Transaction</span>
                            <span className="text-blue-600 text-xs md:text-base cursor-pointer">View All</span>
                        </div>



                        <div className="flex flex-col gap-y-3">


                            <div className="flex flex-row gap-x-4 border-b-2 pt-2 pb-3">

                                <div className="flex flex-col w-1/4  md:w-1/5 lg:w-1/4 justify-center">
                                    <img src={image40} alt="" className=" w-full h-full"/>
                                </div>

                                <div className="flex flex-row justify-between items-center flex-auto">
                                    <div className="flex flex-col gap-y-2">
                                        <span className="font-bold text-lg md:text-xl lg:text-lg xl:text-xl">Nissan GT -
                                            R</span>
                                        <span className="text-slate-400">Sport Car</span>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-end">
                                        <span className="text-slate-400">20 July</span>
                                        <span className="font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl">$80.00</span>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-row gap-x-4 border-b-2 pt-2 pb-3">

                                <div className="flex flex-col w-1/4  md:w-1/5 lg:w-1/4 justify-center">
                                    <img src={image41} alt="" className="w-full h-full"/>
                                </div>

                                <div className="flex flex-row justify-between items-center flex-auto">
                                    <div className="flex flex-col gap-y-2">
                                        <span
                                            className="font-bold text-lg md:text-xl lg:text-lg xl:text-xl">Koegnigsegg</span>
                                        <span className="text-slate-400">Sport Car</span>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-end">
                                        <span className="text-slate-400">19 July</span>
                                        <span className="font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl">$99.00</span>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-row gap-x-4 border-b-2 pt-2 pb-3">

                                <div className="flex flex-col w-1/4  md:w-1/5 lg:w-1/4  justify-center">
                                    <img src={image42} alt="" className=" w-full h-full"/>
                                </div>

                                <div className="flex flex-row justify-between items-center flex-auto">
                                    <div className="flex flex-col gap-y-2">
                                        <span className="font-bold text-lg md:text-xl lg:text-lg xl:text-xl">Rolls -
                                            Royce</span>
                                        <span className="text-slate-400">Sport Car</span>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-end">
                                        <span className="text-slate-400">18 July</span>
                                        <span className="font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl">$96.00</span>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-row gap-x-4 pt-3">

                                <div className="flex flex-col w-1/4  md:w-1/5 lg:w-1/4  justify-center">
                                    <img src={image43} alt="" className=" w-full h-full"/>
                                </div>

                                <div className="flex flex-row justify-between items-center flex-auto">
                                    <div className="flex flex-col gap-y-2">
                                        <span className="font-bold text-lg md:text-xl lg:text-lg xl:text-xl">CR - V</span>
                                        <span className="text-slate-400">SUV</span>
                                    </div>
                                    <div className="flex flex-col gap-y-2 items-end">
                                        <span className="text-slate-400">17 July</span>
                                        <span className="font-bold text-xl md:text-2xl lg:text-xl xl:text-2xl">$80.00</span>
                                    </div>
                                </div>

                            </div>



                        </div>




                    </div>




                </div>



            
     );
}
 
export default BottomRightPanel;