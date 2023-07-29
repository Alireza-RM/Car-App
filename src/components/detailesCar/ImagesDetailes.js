// import image10 from "../../img/image10.svg"
// import image27 from "../../img/image27.svg"
import image28 from "../../img/image28.svg"
import image29 from "../../img/image29.svg"


const ImagesDetailes = ({name,img}) => {
    return ( 
        <div className="flex flex-col gap-y-5 md:w-full">

                    <div className="w-full bg-right-bg bg-no-repeat rounded-xl bg-cover p-4 ">
                        <div className="flex flex-col">
                            <p
                                className="mb-5 font-semibold text-white not-italic text-[17px] min-[500px]:text-2xl md:text-3xl ">
                                Easy
                                way to rent a<br className="hidden md:flex"/> car at a low price</p>
                            <p
                                className="font-medium text-white not-italic text-[12px] min-[500px]:text-base min-[500px]:font-normal md:text-lg">
                                Providing cheap car rental services<br/> and safe and comfortable facilities.</p>
                        </div>
                        
                        <div className="flex items-center justify-center  mt-7 w-full h-auto">
                            <img className="w-2/3 " src={img} alt=""/>
                        </div>
                    </div>

                    <div className="flex flex-row w-full gap-x-4 justify-between sm:gap-x-12 md:gap-x-3">
                        <div className="w-full rounded-2xl bg-right-bg px-1">
                            <img src={img} alt="" className="w-full object-scale-down h-28 rounded-2xl  md:h-20 lg:h-24"/>
                        </div>
                        <div className="w-full rounded-2xl ">
                            <img src={image28} alt="" className="w-full h-28 rounded-2xl  md:h-20 lg:h-24 "/>
                        </div>
                        <div className="w-full rounded-2xl ">
                            <img src={image29} alt="" className="w-full h-28 rounded-2xl  md:h-20 lg:h-24 "/>
                        </div>
                    </div>

                </div>
     );
}
 
export default ImagesDetailes;