import { useState } from "react";
import { Link } from "react-router-dom";




import image1 from "../img/image1.svg"

import FooterLinks from "./footer/FooterLinks";

const Footer = () => {

  
  
    const [allLinks] = useState([{
      headerLine:"About",
      line1:"How it works",
      line2:"Featured",
      line3:"Partnership",
      line4:"Bussiness Relation",
    },
    {
      headerLine:"Socials",
      line1:"Discord",
      line2:"Instagram",
      line3:"Twitter",
      line4:"Facebook",
    },
    {
      headerLine:"Community",
      line1:"Events",
      line2:"Blog",
      line3:"Podcast",
      line4:"Invite a friend",
    },])
    
  
    return (
      <footer className="bg-white border-t-2">
          <div className="2xl:max-w-screen-2xl mx-auto bg-white flex flex-col w-full px-6 pb-6 pt-12">
      
              <div className="flex flex-col lg:flex-row lg:border-b-2 lg:pb-10">
                  <div className="flex flex-col  pb-10 flex-auto">
                      <div className="mb-4 flex">
                          <Link className="flex" to="/">
                              <img src={image1} alt="" className="py-2 md:w-[136px]"/>
                          </Link>
                      </div>
                      <p className="text-slate-400 text-sm md:text-base ">Our vision is to provide convenience </p>
                      <p className="text-slate-400 text-sm md:text-base ">and help increase your sales business.</p>
                  </div>
  
                  <div className="grid grid-cols-2 gap-y-10  md:gap-y-0  md:grid-cols-3 lg:gap-x-10">
                    {allLinks.map(item => <FooterLinks key={item.headerLine} {...item}/>)}
                    
                  </div>
                  </div>
      
      
              <div className="flex flex-col gap-y-8 pt-10 md:flex-row w-full justify-between">
      
                  <div className="flex flex-row justify-between md:order-2 md:gap-x-12">
                      <div className="flex">
                          <p className=" inline text-xs md:text-base font-semibold">Privacy & Policy</p>
                      </div>
                      <div className="flex">
                          <p className=" inline text-xs md:text-base font-semibold">Terms & Condition</p>
                      </div>
                  </div>
                  <div className="flex flex-auto md:order-1">
                      <p className="flex flex-row justify-start text-xs md:text-base font-semibold">©2022 MORENT. All rights reserved</p>
                  </div>
              </div>
      
          </div>
      </footer>
    );
  };;

export default Footer;
