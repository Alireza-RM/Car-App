const BoxRightBottom = ({price}) => {

    return ( 
        <div className="flex flex-col gap-y-4">

                        <div className="mt-4 flex flex-col gap-y-4">
                            <div className="">
                                <div className="flex flex-row justify-between items-center">
                                    <span className="text-slate-400 text-sm md:text-base">Subtotal</span>
                                    <span className="font-bold text-lg md:text-xl">${price}</span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <span className="text-slate-400 text-sm md:text-base">Tax</span>
                                    <span className="font-bold text-lg md:text-xl">$0</span>
                                </div>
                            </div>



                            <div className="">
                                <div className="bg-gray-100 rounded-xl p-2 flex flex-row items-center gap-x-2">
                                    <div className="flex-auto">
                                        <input type="text" name="" id=""
                                            className="bg-gray-100 border-none focus:ring-0 w-full px-3 py-1 text-sm md:text-base placeholder-slate-400 placeholder-"
                                            placeholder="Apply promo code"/>
                                    </div>
                                    <div className=" py-1 px-2">
                                        <button className="font-medium text-sm md:text-base md:font-bold">Apply now</button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="flex flex-row justify-between items-center  h-auto w-full">
                            <div className="flex flex-col items-start justify-start">
                                <div className="flex flex-row items-center justify-center">
                                    <span className="text-lg font-bold">Total Rental Price</span>
                                    {/* <span className="ml-1">day</span>  */}
                                </div>
                                <span className="text-slate-400 text-base">Overall price rental</span>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                                <button className="  text-2xl font-bold  rounded-md ">${price}</button>
                            </div>
                        </div>

                    </div>
     );
}
 
export default BoxRightBottom;