import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { changeBox1 } from "../features/validateFormSlice"
import { validBox1 } from "../rentalCar/validateFunctions"
import { isOnFocousInputBox1 } from "../features/validateFormSlice"

const BoxLeftOne = () => {

    const inputDataOne = useSelector(state => state.validateData.box1)
    const onFocousInputBox1 = useSelector(state => state.validateData.onFocousInputBox1)
    // console.log(onFocousInputBox1);
    const dispatch = useDispatch()


    const [error,setError]=useState({})


    useEffect(()=>{
        setError(validBox1(inputDataOne))
    },[inputDataOne])




    // console.log(inputDataOne)



    const changeHandler = (event) => {
        const {value,name} = event.target
        // console.log(value,name);
        dispatch(changeBox1({value,name}))
    }


    const focousHandler = (event) => {
        const {name}=event.target
        dispatch(isOnFocousInputBox1(name))
    }


    return ( 
        <div className="bg-white p-4 flex flex-col gap-y-5 rounded-xl">
                        <div className="">
                            <div className="flex flex-row justify-between items-center">
                                <span className="font-bold text-lg md:text-xl">Billing Info</span>
                                <span className="text-slate-400 text-sm">Step 1 of 4</span>
                            </div>
                            <span className="text-slate-400 text-sm">Please enter your billing info</span>
                        </div>


                        <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-6">

                            <div className="flex flex-col gap-y-4 md:flex-auto">

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Name</span>
                                    {error.name&&onFocousInputBox1.name&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        {error.name}
                                    </div>}
                                    
                                    <div className="bg-gray-100 rounded-xl p-2 flex flex-row items-center gap-x-2">
                                        <div className="flex-auto">
                                            <input type="text" value={inputDataOne.name} name="name"
                                                className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-"
                                                placeholder="Your name"  onChange={changeHandler} onFocus={focousHandler}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Address</span>
                                    {error.address&&onFocousInputBox1.address&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        {error.address}
                                    </div>}
                                    <div className="bg-gray-100 rounded-xl p-2 flex flex-row items-center gap-x-2">
                                        <div className="flex-auto">
                                            <input type="text" value={inputDataOne.address} name="address"
                                                className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-"
                                                placeholder="AinputDataOneress"  onChange={changeHandler} onFocus={focousHandler}/>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="flex flex-col gap-y-4 md:flex-auto">

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Phone Number</span>
                                    {error.phoneNumber&&onFocousInputBox1.phoneNumber&&
                                    <div className="text-base font-medium text-white pl-2 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        {error.phoneNumber}
                                    </div>}
                                    <div className="bg-gray-100 rounded-xl p-2 flex flex-row items-center gap-x-2">
                                        <div className="flex-auto">
                                            <input type="text" value={inputDataOne.phoneNumber} name="phoneNumber"
                                                className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-"
                                                placeholder="Phone number"  onChange={changeHandler} onFocus={focousHandler}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold">Town / City</span>
                                    {error.townCity&&onFocousInputBox1.townCity&&
                                    <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                        <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                        {error.townCity}
                                    </div>}
                                    <div className="bg-gray-100 rounded-xl p-2 flex flex-row items-center gap-x-2">
                                        <div className="flex-auto">
                                            <input type="text" value={inputDataOne.townCity} name="townCity"
                                                className="bg-gray-100 py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-"
                                                placeholder="Town or city"  onChange={changeHandler} onFocus={focousHandler}/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
     );
}
 
export default BoxLeftOne;