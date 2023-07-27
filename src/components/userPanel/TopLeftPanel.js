import image36 from "../../img/image36.svg"
import image37 from "../../img/image37.svg"
import image38 from "../../img/image38.svg"

const TopLeftPanel = () => {
    return ( 
<div className="bg-white rounded-md p-4 flex flex-col gap-y-6 lg:w-full lg:flex-auto">

    <div className="flex flex-col gap-y-6">
        <span className="text-base font-bold md:text-lg lg:text-xl xl:text-2xl">Detail Rental</span>
        <span className="flex-auto">
            <img src={image37} alt="" className="md:hidden w-full"/>
            <img src={image36} alt="" className="hidden md:flex w-full"/>
        </span>
    </div>




    <div className="flex flex-row gap-x-2">

        <div className="w-1/4 sm:w-1/6 lg:w-1/4 flex-auto">
            <img src={image38} alt="" className="h-full w-full"/>
        </div>

        <div className="gap-y-4  flex flex-col justify-center sm:gap-y-8 lg:gap-y-1 flex-auto w-2/4">
            <p className="text-xl  font-bold sm:text-2xl md:text-2xl">Nissan GT - R</p>
            

            <div className="flex flex-row justify-between items-stretch">
                <span className="sm:text-lg font-medium text-slate-600">Sport Car</span>
                <span className="sm:text-lg text-slate-400">#9761</span>
            </div>

        </div>
    </div>




    <div className="  flex flex-col gap-y-8  border-b-2 pb-7">


        <div className="flex flex-col gap-y-5">

            <div className="flex flex-row  items-center gap-x-2">
                <span className="w-4 h-4 p-1 bg-indigo-200 rounded-full flex justify-center items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                </span>
                <div className="">
                    <h1 className="text-base font-bold">Pick - Up</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-0">

                <div className="flex flex-col gap-y-2  lg:border-r-2 lg:pr-3">
                    <span className="font-bold">Locations</span>
                    <div
                        className="bg-gray-100 lg:bg-white rounded-xl p-5 lg:p-0 flex flex-row items-center gap-x-2">
                        <div className=" flex-auto flex flex-row justify-between items-center">
                            {/* <!-- <input type="text" name="" id="" className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-" placeholder="Your name"> --> */}
                            <p className="text-slate-400 lg:text-xs xl:text-sm">Kota Semarang</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className="w-4 h-4 stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2 lg:border-r-2 lg:px-3">
                    <span className="font-bold">Time</span>
                    <div
                        className="bg-gray-100 lg:bg-white rounded-xl p-5 lg:p-0 flex flex-row items-center gap-x-2">
                        <div className="flex-auto flex flex-row justify-between items-center">
                            {/* <!-- <input type="text" name="" id="" className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-" placeholder="Your name"> --> */}
                            <p className="text-slate-400 lg:text-xs xl:text-sm">07.00</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className="w-4 h-4 stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2 lg:pl-3">
                    <span className="font-bold">Date</span>
                    <div
                        className="bg-gray-100 lg:bg-white rounded-xl p-5 lg:p-0 flex flex-row items-center gap-x-2">
                        <div className=" flex-auto flex flex-row justify-between items-center">
                            {/* <!-- <input type="text" name="" id="" className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-" placeholder="Your name"> --> */}
                            <p className="text-slate-400 lg:text-xs xl:text-sm">20 July 2022</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className="w-4 h-4 stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>



        <div className="flex flex-col gap-y-5">

            <div className="flex flex-row  items-center gap-x-2">
                <span className="w-4 h-4 p-1 bg-blue-200 rounded-full flex justify-center items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                </span>
                <div className="">
                    <h1 className="text-base font-bold">Drop - Off</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-0">

                <div className="flex flex-col gap-y-2  lg:border-r-2 lg:pr-3">
                    <span className="font-bold">Locations</span>
                    <div
                        className="bg-gray-100 lg:bg-white rounded-xl p-5 lg:p-0 flex flex-row items-center gap-x-2">
                        <div className="flex-auto flex flex-row justify-between items-center">
                            {/* <!-- <input type="text" name="" id="" className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-" placeholder="Your name"> --> */}
                            <p className="text-slate-400 lg:text-xs xl:text-sm">Kota Semarang</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className="w-4 h-4 stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2 lg:border-r-2 lg:px-3">
                    <span className="font-bold">Time</span>
                    <div
                        className="bg-gray-100 lg:bg-white rounded-xl p-5 lg:p-0 flex flex-row items-center gap-x-2">
                        <div className="flex-auto flex flex-row justify-between items-center">
                            {/* <!-- <input type="text" name="" id="" className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-" placeholder="Your name"> --> */}
                            <p className="text-slate-400 lg:text-xs xl:text-sm">01.00</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className="w-4 h-4 stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2 lg:pl-3">
                    <span className="font-bold">Date</span>
                    <div
                        className="bg-gray-100 lg:bg-white rounded-xl p-5 lg:p-0 flex flex-row items-center gap-x-2">
                        <div className="flex-auto flex flex-row justify-between items-center">
                            {/* <!-- <input type="text" name="" id="" className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-" placeholder="Your name"> --> */}
                            <p className="text-slate-400 lg:text-xs xl:text-sm">21 July 2022</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className="w-4 h-4 stroke-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    </div>




    <div className="flex flex-row justify-between items-center  h-auto w-full">
        <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center">
                <span className="text-lg font-bold">Total Rental Price</span>
                {/* <!-- <span className="ml-1">day</span> --> */}
            </div>
            <span className="text-slate-400 text-base">Overall price rental</span>
        </div>
        <div className=" flex flex-col justify-center items-center">
            <button className="  text-2xl font-bold  rounded-md ">$80.00</button>
        </div>
    </div>




</div> )};

 
export default TopLeftPanel;