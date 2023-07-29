import {Link} from "react-router-dom"

const ModalSearchCar = ({id,name,title,price,img,closeModal}) => {
  return (
    <div className="flex flex-row gap-x-2 relative items-stretch border-y-2">
      <div className="flex flex-col w-1/3 min-[500px]:w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 justify-center0">
        <img src={img} alt="" className=" w-full h-full" />
      </div>

      <div className="flex flex-row justify-between  flex-auto px-1">
        <div className="flex flex-col gap-y-4 justify-between">
          <span className="font-bold text-base md:text-xl lg:text-lg xl:text-xl">
            {name}
          </span>
          <span className="text-slate-400 text-base">{title}</span>
        </div>
        <div className="flex flex-col gap-y-4 items-end justify-between">
          <span className="text-slate-400 text-base">20 July</span>
          <span className="font-bold  text-base md:text-2xl lg:text-xl xl:text-2xl">
            ${price}
          </span>
        </div>
      </div>
      <Link to={`/detailescar/${id}`}className="w-full h-full opacity-0 bg-orange-500 z-10 absolute" onClick={() => closeModal()} ></Link>
    </div>
  );
};

export default ModalSearchCar;
