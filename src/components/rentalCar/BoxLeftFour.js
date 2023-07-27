import image35 from "../../img/image35.svg"

import { useSelector,useDispatch } from "react-redux"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastFunck } from "../shared/toastifyFunction";

import { changeBox4Button,toastValid} from "../features/validateFormSlice";
import { validBox1,validBox2,validBox3} from "./validateFunctions";


const BoxLeftFour = () => {



    const inputDataFourButton = useSelector(state => state.validateData.box4button)
    const box4buttonvalid = useSelector(state => state.validateData.box4buttonvalid)
    const dispatch = useDispatch()

    // validation
    const inputDataone = useSelector(state => state.validateData.box1)
    const inputDataTow = useSelector(state => state.validateData.box2)
    const inputDataThree = useSelector(state => state.validateData.box3)
    const inputDataThreeButton = useSelector(state => state.validateData.box3button)

    


    const checkboxHandler = (event) => {
        const {name,checked} = event.target
        dispatch(changeBox4Button({name,checked}))
    }


    const toastHandler = () => {
        if(
        !Object.keys(validBox1(inputDataone)).length&&
        !Object.keys(validBox3(inputDataThree)).length&&
        !Object.keys(validBox2(inputDataTow)).length&&
        Object.keys(inputDataFourButton).length&&
        Object.keys(inputDataThreeButton).length){
            toastFunck("success","Rental Success","right")
        }else{
            toastFunck("failed","The information is not complete","right")
            dispatch(toastValid())
        }
    }

    return ( 
        <div className="bg-white p-4 flex flex-col gap-y-5 rounded-xl">

                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-row justify-between items-center">
                                <span className="font-bold text-lg md:text-xl">Confirmation</span>
                                <span className="text-slate-400 text-sm md:text-base">Step 4 of 4</span>
                            </div>
                            <span className="text-slate-400 text-sm md:text-base">We are using the most advanced security to
                                provide you the best experience ever.</span>
                        </div>

                        {!Object.keys(inputDataFourButton).length&&box4buttonvalid&&
                            <div className="text-base font-medium text-white pl-6 bg-red-400 rounded-xl">
                                <span className="px-2 mr-2 font-semibold bg-blue-600 rounded-3xl text-center">!</span>
                                Choose one  items
                            </div>}
                        

                        <div className="flex flex-col gap-y-4">

                            <div
                                className="bg-gray-100 p-4 rounded-xl flex flex-row justify-between items-center md:flex-auto">
                                <div className="flex flex-row  items-center gap-x-2">
                                    <span className=" p-1  rounded-full flex justify-center items-center">
                                        <input type="checkbox"  name="one" checked={inputDataFourButton.one|| false} onChange={checkboxHandler}
                                            className="form-checkbox  rounded border-2 border-slate-400"
                                            id="one"></input>
                                    </span>
                                    <label htmlFor="one" className="">
                                        <h1 className="line-clamp-2 text-sm text-slate-500 md:text-base">I agree with
                                            sending an Marketing and newsletter emails. No spam, promissed!</h1>
                                    </label>
                                </div>
                            </div>

                            <div
                                className="bg-gray-100 p-4 rounded-xl flex flex-row justify-between items-center md:flex-auto">
                                <div className="flex flex-row  items-center gap-x-2">
                                    <span className=" p-1  rounded-full flex justify-center items-center">
                                        <input type="checkbox"  name="tow" checked={inputDataFourButton.tow || false} onChange={checkboxHandler}
                                            className="form-checkbox  rounded border-2 border-slate-400"
                                            id="tow"></input>
                                    </span>
                                    <label htmlFor="tow" className="">
                                        <h1 className="line-clamp-2 text-sm text-slate-500 md:text-base">I agree with our
                                            terms and conditions and privacy policy!</h1>
                                    </label>
                                </div>
                            </div>

                        </div>

                        <div className="">
                            <button onClick={toastHandler}
                                className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md md:text-xl ">Rental
                                Car</button>
                        </div>

                        <div className="flex flex-col gap-y-3 mt-2">
                            <div className="">
                                <img src={image35} alt=""/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <span className="font-bold text-lg md:text-xl">All your data are safe</span>
                                <span className="text-slate-400 line-clamp-2 text-sm md:text-base">We are using the most advanced security to provide you the best experience ever.</span>
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                    
     );
}
 
export default BoxLeftFour;