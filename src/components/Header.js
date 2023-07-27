import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { changeLocation } from "./features/navbarSlice";

import image1 from "../img/image1.svg";
import image2 from "../img/image2.svg";
import image3 from "../img/image3.svg";
import image4 from "../img/image4.svg";
import image5 from "../img/image5.svg";
import image6 from "../img/image6.svg";
import image from "../img/image.svg";

import LogoHeader from "./header/LogoHeader";
import ImageLogoPerson from "./shared/ImageLogoPerson";


import ModalHeader from "./header/ModalHeader";
import ModalNav from "./header/ModalNav";
import ModalLike from "./header/ModalLike";



const Header = () => {

  const locData = useSelector(state => state.NavData.loc).substring(0,12)
  const dispatch = useDispatch()

  const location = useLocation().pathname
  
  useEffect(() => {
    // console.log(location);
    // console.log(locData.substring(0,12));
    dispatch(changeLocation(location))
  },[location])


  const [imageLogo] = useState([
    { id: 1, img: image6 },
    { id: 2, img: image5 },
    { id: 3, img: image4 },
  ]);

  const [isModalSearch, setIsModalSearch] = useState(false);
  const [isModalNav, setIsModalNav] = useState(false);
  const [isModalLike, setIsModalLike] = useState(false);


  const openModalSearch = () => {
    setIsModalSearch(!isModalSearch);
  };

  const openModalNav = () => {
    setIsModalNav(!isModalNav);
  };

  const openModalLike = () => {
    setIsModalLike(!isModalLike);
  };



  return (
    <header className="relative sticky top-0 z-20 ">
      <ModalHeader isModalSearch={isModalSearch} setIsModalSearch={setIsModalSearch}/>
      <ModalNav isModalNav={isModalNav} setIsModalNav={setIsModalNav}/>
      <ModalLike isModalLike={isModalLike} setIsModalLike={setIsModalLike}/>
      <div className="2xl:max-w-screen-2xl mx-auto shadow-blue-100 shadow-2xl bg-white grid grid-cols-2 gap-y-7 items-start p-6 md:flex md:flex-row md:gap-x-3">
        {/*  */}
        <div className="flex flex-col md:order-1 gap-y-6 md:flex-row md:items-center md:gap-x-4 ">
          {locData === "/userpanel" || locData === "/filtercar" || locData === "/detailescar" ?
            <svg onClick={() => openModalNav()}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 fill-slate-400 cursor-pointer lg:hidden"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          :null}
          <Link className="py-1 min-[500px]:py-2 md:py-3 md:py-2" to="/">
            <img src={image1} alt="" className="md:w-[136px]" />
          </Link>
        </div>
        {/*  */}
        <div className="flex justify-end items-start gap-x-3  md:order-3">
          {imageLogo.map((i) => (
            <LogoHeader key={i.id} image={i.img} id={i.id} openModalLike={openModalLike}/>
          ))}
          <ImageLogoPerson img={image} />
        </div>

        <div className=" col-span-2 w-full flex  justify-between  md:flex-1 md:order-2 md:ml-10">
          <div className="w-full flex  gap-x-1 sm:gap-x-2 sm:justify-start relative">
            <div onClick={()=>openModalSearch()} className=" flex px-3 py-2 rounded-lg border-2 border-slate-100 flex-1 max-w-xs flex-row md:rounded-full">
              <div htmlFor="search" className="cursor-pointer">
                <img className="" src={image2} alt="" />
              </div>
              <div className="cursor-pointer pl-2 border-none text-slate-400 sm:ml-2 flex-1 md:ml-0 lg:ml-2">
                Search something here
              </div>

              <div className="hidden md:flex ml-3 mr-2 lg:ml-2">
                <img className="w-6 h-6 hidden md:flex " src={image3} alt="" />
              </div>
            </div> 

            <div className=" p-2 flex justify-center items-center rounded-lg border-2 border-slate-100 cursor-pointer md:hidden">
              <img className="w-6 h-6 " src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
