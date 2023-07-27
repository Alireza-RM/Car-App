const LogoHeader = ({ image, id , openModalLike}) => {
  return (
    <div  onClick={() => id === 1 && openModalLike()} className="hidden border-2 border-slate-100 rounded-full relative hover:bg-slate-100 cursor-pointer p-2 justify-center items-center min-[500px]:flex">
      <img src={image} alt="cc" className="" />
      {/* <span className="w-[10px] h-[10px] bg-red-500 absolute right-0 bottom-7 rounded-full"></span> */}
      {/* <span className="w-[10px] h-[10px] bg-red-500 absolute right-0 bottom-7 rounded-full"></span> */}
      {id === 2 ?<span className="w-[10px] h-[10px] bg-red-500 absolute right-0 bottom-7 rounded-full"></span>:null}
      {/* {id === 1 ?<span onClick={() => openModalLike()} className="w-[10px] h-[10px] bg-red-500 absolute right-0 bottom-7 rounded-full"></span>:null} */}
    </div>
  );
};

export default LogoHeader;
