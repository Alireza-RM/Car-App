const LogoHeader = ({ image, id , openModalLike}) => {
  return (
    <div  onClick={() => id === 1 && openModalLike()} className={`${id !== 1 ?"hidden min-[500px]:flex":null} flex border-2 border-slate-100 rounded-full relative hover:bg-slate-100 cursor-pointer p-2 justify-center items-center`}>
      <img src={image} alt="cc" className="" />
      {id === 2 ?<span className="w-[10px] h-[10px] bg-red-500 absolute right-0 bottom-7 rounded-full"></span>:null}
    </div>
  );
};

export default LogoHeader;
