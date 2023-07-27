import image32 from "../../img/image32.svg"
import image33 from "../../img/image33.svg"
import image34 from "../../img/image34.svg"


import { useEffect ,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { changeBox3 } from "../features/validateFormSlice"
import { changeBox3Button } from "../features/validateFormSlice"
import { validBox3 } from "./validateFunctions"
import { isOnFocousInputBox3 } from "../features/validateFormSlice"



const BoxLeftThree = () => {


    const inputDataThree = useSelector(state => state.validateData.box3)
    const inputDataThreeButton = useSelector(state => state.validateData.box3button)
    const onFocousInputBox3 = useSelector(state => state.validateData.onFocousInputBox3)
    const box3buttonvalid = useSelector(state => state.validateData.box3buttonvalid)
    const dispatch = useDispatch()
    // console.log(inputDataThreeButton)


    const [error,setError]=useState({})


    useEffect(()=>{
        setError(validBox3(inputDataThree))
        // console.log(error);
    },[inputDataThree])



    const changeHandler = (event) => {
        const {value,name} = event.target
        dispatch(changeBox3({value,name}))
    }

    const checkboxHandler = (event) => {
        const {name,checked} = event.target
        dispatch(changeBox3Button({name,checked}))
    }



    const focousHandler = (event) => {
        const {name}=event.target
        dispatch(isOnFocousInputBox3(name))
    }



    return ( 
        <div className="bg-white p-4 flex flex-col gap-y-5 rounded-xl">

                        <div className="">
                            <div className="flex flex-row justify-between items-center">
                                <span className="font-bold text-lg md:text-xl">Billing Info</span>
                                <span className="text-slate-400 text-sm">Step 3 of 4</span>
                            </div>
                            <span className="text-slate-400 text-sm">Please enter your billing info</span>
                        </div>


                        <div className="bg-gray-100 p-4 flex flex-col gap-y-5 rounded-xl">

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row  items-center gap-x-2">
                                    <span
                                        className="w-4 h-4 p-1 bg-indigo-200 rounded-full flex justify-center items-center">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                    </span>
                                    <div className="">
                                        <h1 className="text-base font-bold">Credit Card</h1>
                                    </div>
                                </div>
                                <img src={image32} alt=""/>
                            </div>

                            <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-6">

                                <div className="flex flex-col gap-y-4 md:flex-auto">

                                    <div className="flex flex-col gap-y-2">
                                        <span className="font-bold">Card Number</span>
                                        {error.cardNumber&&onFocousInputBox3.cardNumber&&
                                          <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                           <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                           {error.cardNumber}
                                          </div> }
                                        <div className="bg-white rounded-xl p-2 flex flex-row items-center gap-x-2">
                                            <div className="flex-auto">
                                                <input type="text" value={inputDataThree.cardNumber} name="cardNumber" id=""
                                                    className="bg-white py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-"
                                                    placeholder="Card Number" onChange={changeHandler} onFocus={focousHandler}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-2">
                                        <span className="font-bold">Card Holder</span>
                                        {error.cardHolder&&onFocousInputBox3.cardHolder&&
                                          <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                           <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                           {error.cardHolder}
                                          </div> }
                                        <div className="bg-white rounded-xl p-2 flex flex-row items-center gap-x-2">
                                            <div className="flex-auto">
                                                <input type="text" value={inputDataThree.cardHolder} name="cardHolder" id=""
                                                    className="bg-white py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-"
                                                    placeholder="Card holder" onChange={changeHandler} onFocus={focousHandler}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="flex flex-col gap-y-4 md:flex-auto">

                                    <div className="flex flex-col gap-y-2">
                                        <span className="font-bold">Expration Date</span>
                                        {error.exprationDate&&onFocousInputBox3.exprationDate&&
                                          <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                           <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                           {error.exprationDate}
                                          </div> }
                                        <div className="bg-white rounded-xl p-2 flex flex-row items-center gap-x-2">
                                            <div className="flex-auto">
                                                <input type="text" value={inputDataThree.exprationDate} name="exprationDate" id=""
                                                    className="bg-white py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-"
                                                    placeholder="DD / MM YY" onChange={changeHandler} onFocus={focousHandler}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-y-2">
                                        <span className="font-bold">CVC</span>
                                        {error.cvc&&onFocousInputBox3.cvc&&
                                          <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                           <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                           {error.cvc}
                                          </div> }
                                        <div className="bg-white rounded-xl p-2 flex flex-row items-center gap-x-2">
                                            <div className="flex-auto">
                                                <input type="text" value={inputDataThree.cvc} name="cvc" id=""
                                                    className="bg-white py-3 px-4 border-none focus:ring-0 w-full  text-sm md:text-base placeholder-slate-400 placeholder-"
                                                    placeholder="CVC" onChange={changeHandler} onFocus={focousHandler}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>  



                        {!Object.keys(inputDataThreeButton).length&&box3buttonvalid&&
                                          <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                           <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                           Choose one  items
                                          </div> }

                        <div className=" flex flex-col gap-y-5 md:flex-row md:gap-x-6 lg:flex-col xl:flex-row">

                            <div
                                className="bg-gray-100 p-4 rounded-xl flex flex-row justify-between items-center md:flex-auto">
                                <div className="flex flex-row  items-center gap-x-2">
                                    <span className=" p-1  rounded-full flex justify-center items-center">
                                        <input type="checkbox" checked={inputDataThreeButton.PayPal || false} name="PayPal"
                                            onChange={checkboxHandler}                                        
                                            className="form-checkbox  rounded-full border-2 border-slate-400"
                                            id="PayPal"></input>
                                    </span>
                                    <label htmlFor="PayPal">
                                        <h1 className="text-base font-bold" htmlFor="PayPal">PayPal</h1>
                                    </label>
                                </div>
                                <img src={image33} alt=""/>
                            </div>

                            <div
                                className="bg-gray-100 p-4 rounded-xl flex flex-row justify-between items-center md:flex-auto">
                                <div className="flex flex-row  items-center gap-x-2">
                                    <span className=" p-1 rounded-full flex justify-center items-center">
                                        <input type="checkbox" checked={inputDataThreeButton.Bitcoin || false} name="Bitcoin"
                                            onChange={checkboxHandler}                                        
                                            className="form-checkbox  rounded-full border-2 border-slate-400"
                                            id="Bitcoin"></input>
                                    </span>
                                    <label htmlFor="Bitcoin">
                                        <h1 className="text-base font-bold">Bitcoin</h1>
                                    </label>
                                </div>
                                <img src={image34} alt=""/>
                            </div>

                        </div>


                    </div>
     );
}
 
export default BoxLeftThree;