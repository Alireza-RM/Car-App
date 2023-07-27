import {useDispatch, useSelector} from "react-redux"
import { changeBox2 } from "../features/validateFormSlice"


const BoxLeftTow = () => {


    const inputDataTwo = useSelector(state => state.validateData.box2)
    const box2valid = useSelector(state => state.validateData.box2valid)
    const dispatch = useDispatch()
    // console.log(inputDataTwo);

    const changeHandler = (event) => {
        event.preventDefault();
        const {value,name}=event.target
        dispatch(changeBox2({value,name}))

    }

    return ( 
        <div className="bg-white p-4 flex flex-col gap-y-8 rounded-xl">
                        <div className="">
                            <div className="flex flex-row justify-between items-center">
                                <span className="font-bold text-lg md:text-xl">Rental Info</span>
                                <span className="text-slate-400 text-sm">Step 2 of 4</span>
                            </div>
                            <span className="text-slate-400 text-sm">Please select your rental date</span>
                        </div>


                        <div className="flex flex-col gap-y-5">

                            <div className="flex flex-row  items-center gap-x-2">
                                <span className="w-4 h-4 p-1 bg-indigo-200 rounded-full flex justify-center items-center">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                </span>
                                <div className="">
                                    <h1 className="text-base font-bold">Pick - Up</h1>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6">

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Locations</span>
                                    {inputDataTwo.city1 === "default"&&box2valid&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        Select your city
                                    </div>}
                                    <select value={inputDataTwo.city1} name="city1" onChange={changeHandler} className="text-slate-400 bg-gray-100 rounded-xl p-5 flex flex-row items-center gap-x-2 border-none outline-none">
                                        <option value="default">Select your city</option>
                                        <option value="madrid">MADRID</option>
                                        <option value="barcelone">BARCELONE</option>
                                        <option value="svia">SVIA</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Time</span>
                                    {inputDataTwo.time1 === "default"&&box2valid&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        Select your Time
                                    </div>}
                                    <select value={inputDataTwo.time1} name="time1" onChange={changeHandler} className="text-slate-400 bg-gray-100 rounded-xl p-5 flex flex-row items-center gap-x-2 border-none outline-none">
                                        <option value="default">Select your Time</option>
                                        <option value="2:00">2:00</option>
                                        <option value="4:00">4:00</option>
                                        <option value="6:00">6:00</option>
                                        <option value="8:00">8:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="12:00">12:00</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Date</span>
                                    {inputDataTwo.date1 === "default"&&box2valid&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        Select your Date
                                    </div>}
                                    <select value={inputDataTwo.date1} name="date1" onChange={changeHandler} className="text-slate-400 bg-gray-100 rounded-xl p-5 flex flex-row items-center gap-x-2 border-none outline-none">
                                        <option value="default">Select your Date</option>
                                        <option value="2023,15,Juli">2023 ,15, Juli</option>
                                        <option value="2023,16,Juli">2023 ,16, Juli</option>
                                        <option value="2023,17,Juli">2023 ,17, Juli</option>
                                        <option value="2023,18,Juli">2023 ,18, Juli</option>
                                        <option value="2023,19,Juli">2023 ,19, Juli</option>
                                    </select>
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

                            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6">

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Locations</span>
                                    {inputDataTwo.city2 === "default"&&box2valid&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        Select your city
                                    </div>}
                                    <select value={inputDataTwo.city2} name="city2" onChange={changeHandler} className="text-slate-400 bg-gray-100 rounded-xl p-5 flex flex-row items-center gap-x-2 border-none outline-none">
                                        <option value="default">Select your city</option>
                                        <option value="madrid">MADRID</option>
                                        <option value="barcelone">BARCELONE</option>
                                        <option value="svia">SVIA</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Time</span> 
                                    {inputDataTwo.time2 === "default"&&box2valid&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        Select your Time
                                    </div>}
                                    <select value={inputDataTwo.time2} name="time2" onChange={changeHandler} className="text-slate-400 bg-gray-100 rounded-xl p-5 flex flex-row items-center gap-x-2 border-none outline-none">
                                        <option value="default">Select your Time</option>
                                        <option value="2:00">2:00</option>
                                        <option value="4:00">4:00</option>
                                        <option value="6:00">6:00</option>
                                        <option value="8:00">8:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="12:00">12:00</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Date</span>
                                    {inputDataTwo.date2 === "default"&&box2valid&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        Select your Date
                                    </div>}
                                    <select value={inputDataTwo.date2} name="date2" onChange={changeHandler} className="text-slate-400 bg-gray-100 rounded-xl p-5 flex flex-row items-center gap-x-2 border-none outline-none">
                                        <option value="default">Select your Date</option>
                                        <option value="2023,25,Juli">2023 ,25, Juli</option>
                                        <option value="2023,26,Juli">2023 ,26, Juli</option>
                                        <option value="2023,27,Juli">2023 ,27, Juli</option>
                                        <option value="2023,28,Juli">2023 ,28, Juli</option>
                                        <option value="2023,29,Juli">2023 ,29, Juli</option>
                                    </select>
                                </div>

                            </div>

                        </div>


                    </div>
     );
}
 
export default BoxLeftTow;