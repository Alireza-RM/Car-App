import { useSelector } from "react-redux";

import NavFilter from "../filterCar/NavFilter";
import NavPanelChild from "./NavPanelChild";

const ModalNavFilter = ({isModalNav,setIsModalNav}) => {

    const locData = useSelector(state => state.NavData.loc).substring(0,12)

    const closeModal = () => {
        setIsModalNav(!isModalNav);
      };

  return (
    // <div
    //   className={`w-2/4 sm:w-2/4 md:w-1/3 h-screen bg-white absolute top-0 -left-80 z-40  ${
    //     isModalNav && "left-[0rem]"
    //   } p-5 overflow-y-scroll flex flex-col gap-y-2`}>
    //   <div className="flex justify-end">
    //      <svg className="w-6 h-6 cursor-pointer" onClick={() => closeModal()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    //        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //      </svg>
    //   </div>
    //   <NavPanel/>
    //   {/* <NavFilter /> */}
    // </div>

    <div
      className={`w-4/4 sm:w-2/4 md:w-1/3 h-screen bg-white absolute top-0 -left-80 z-40  ${
        isModalNav && "left-[0rem]"
      } p-5 overflow-y-scroll flex flex-col gap-y-2`}>
      <div className="flex justify-end">
         <svg className="w-6 h-6 cursor-pointer" onClick={() => closeModal()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
      </div>
      {locData === "/userpanel"&& <NavPanelChild/>}
      {locData === "/filtercar" || locData === "/detailescar" ? <NavFilter />:null}
    </div>
  );
};

export default ModalNavFilter;
