import image44 from "../../img/image44.svg"
import image45 from "../../img/image45.svg"
import image46 from "../../img/image46.svg"
import image47 from "../../img/image47.svg"
import image48 from "../../img/image48.svg"
import image49 from "../../img/image49.svg"
import image50 from "../../img/image50.svg"
import image51 from "../../img/image51.svg"
import image52 from "../../img/image52.svg"
import image53 from "../../img/image53.svg"
import image54 from "../../img/image54.svg"
import image55 from "../../img/image55.svg"


const NavPanelChild = () => {
    return ( 
        <div className=" lg:flex bg-white py-6 px-3 lg:flex-col">


            {/* <!-- top --> */}
            <div className="flex-auto flex flex-col gap-y-10">

                {/* <!--main menu--> */}
                <div className="flex flex-col gap-y-8">
                    <span className="text-slate-400 text-xs pl-4">M A I N M E N U</span>

                    <div className="flex flex-col gap-y-1">

                        <div className="flex flex-row gap-x-2 items-center bg-blue-600 px-4 py-3 rounded-lg cursor-pointer">
                            <span className="">
                                <img src={image44} alt=""/>
                            </span>
                            <span className="text-white text-sm">Dashboard</span>
                        </div>


                        <div className="flex flex-row gap-x-2 items-center  px-4 py-3 rounded-lg cursor-pointer">
                            <span className="">
                                <img src={image45} alt=""/>
                            </span>
                            <span className="text-slate-400 text-sm">Car Rent</span>
                        </div>

                        <div className="flex flex-row gap-x-2 items-center  px-4 py-3 rounded-lg cursor-pointer">
                            <span className="">
                                <img src={image46} alt=""/>
                            </span>
                            <span className="text-slate-400 text-sm">Insight</span>
                        </div>

                        <div className="flex flex-row gap-x-2 items-center  px-4 py-3 rounded-lg cursor-pointer">
                            <span className="">
                                <img src={image47} alt=""/>
                            </span>
                            <span className="text-slate-400 text-sm">Reimburse</span>
                        </div>

                        <div className="flex flex-row gap-x-2 items-center  px-4 py-3 rounded-lg cursor-pointer">
                            <span className="">
                                <img src={image54} alt=""/>
                            </span>
                            <span className="text-slate-400 text-sm">Inbox</span>
                        </div>

                        <div className="flex flex-row gap-x-2 items-center  px-4 py-3 rounded-lg cursor-pointer">
                            <span className="">
                                <img src={image48} alt=""/>
                            </span>
                            <span className="text-slate-400 text-sm">Calender</span>
                        </div>


                    </div>

                </div>





                {/* <!--prefrernces--> */}
                <div className="">
                    <div className="flex flex-col gap-y-8 ">
                        <span className="text-slate-400 text-xs pl-4">P R E F E R E N C E S</span>

                        <div className="flex flex-col gap-y-1">

                            <div className="flex flex-row gap-x-2 items-center  px-4 py-3 rounded-lg cursor-pointer">
                                <span className="">
                                    <img src={image49} alt=""/>
                                </span>
                                <span className="text-slate-400 text-sm">Settings</span>
                            </div>

                            <div className="flex flex-row gap-x-2 items-center  px-4 py-3 rounded-lg cursor-pointer">
                                <span className="">
                                    <img src={image50} alt=""/>
                                </span>
                                <span className="text-slate-400 text-sm">Help & Center</span>
                            </div>

                            <div className="flex flex-row gap-x-4 md:gap-x-0 items-center justify-between px-4 py-3 rounded-lg cursor-pointer">
                                <div className="flex flex-row gap-x-1 items-center">
                                    <span className="flex-auto">
                                        <img src={image51} alt="img"/>
                                    </span>
                                    <span className="text-slate-400 lg:text-xs xl:text-sm">Dark Mode</span>
                                </div>
                                <div className="flex flex-row bg-gray-100 rounded-full  gap-x-1">
                                    <span className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center">
                                        <img src={image53} alt="img" className="w-4 h-4"/>
                                    </span>
                                    <span className="w-4 h-4 w-6 h-6 rounded-full flex items-center justify-center">
                                        <img src={image55} alt="img" className="w-4 h-4"/>
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>




            {/* <!-- bottom --> */}
            <div className="mt-48">
                <div className="flex flex-row gap-x-2 items-center  px-4 py-3 rounded-lg cursor-pointer">
                    <span className="">
                        <img src={image52} alt=""/>
                    </span>
                    <span className="text-slate-400 text-sm">Log Out</span>
                </div>
            </div>



        </div>
     );
}
 
export default NavPanelChild;