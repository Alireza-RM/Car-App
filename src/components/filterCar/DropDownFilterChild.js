const DropDownFilterChild = ({tailw,colorRoundTitle,colorTitle,title,location,date,time}) => {
    return ( 
        <div className={`flex flex-col p-4  rounded-xl gap-y-8 bg-white flex-auto lg:w-full ${tailw}`}>
                    <div className="flex flex-row  items-center gap-x-2">
                        <span className={`w-4 h-4 p-1 ${colorRoundTitle} rounded-full flex justify-center items-center`}>
                            <span className={`w-2 h-2 ${colorTitle} rounded-full`}></span>
                        </span>
                        <div className="">
                            <h1 className="text-lg font-bold">{title}</h1>
                        </div>
                    </div>
                    <div className=" flex flex-row ">
                        <div className="border-r-2 pr-3  flex-auto xl:-pr-5">
                            <p className="text-lg font-bold">Locations</p>
                            <span className="flex flex-row items-center gap-x-2 xl:gap-x-8 lg:gap-x-0 justify-between">
                                <p className="text-sm text-slate-400">{location}</p>
                                <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </span>
                        </div>

                        <div className="border-r-2  px-3  flex-auto ">
                            <p className="text-lg font-bold">Date</p>
                            <span className="flex flex-row items-center gap-x-2 xl:gap-x-8 lg:gap-x-0 justify-between">
                                <p className="text-sm text-slate-400">{date}</p>
                                <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </span>
                        </div>

                        <div className="flex-auto pl-3 ">
                            <p className="text-lg font-bold">Time</p>
                            <span className="flex flex-row  gap-x-2 items-center xl:gap-x-8 lg:gap-x-0 justify-between">
                                <p className="text-sm text-slate-400">{time}</p>
                                <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
     )
     ;
}
 
export default DropDownFilterChild;