import { Link } from "react-router-dom";

const Bilbord = ({id,textTopUp,textTopDown,textCenterTop,textCenterDown,textButton,colorButton,image,sizeImage,bg}) => {
    return (
      <div className={`w-full ${bg} bg-no-repeat rounded-xl bg-cover p-4`}>
        <div className="flex flex-col">
          <p className="mb-5 font-semibold text-white not-italic text-[17px] min-[500px]:text-2xl md:text-3xl ">
            {textTopUp}
            <br className="hidden md:flex" /> {textTopDown}
          </p>
          <p className="font-medium text-white not-italic text-[12px] min-[500px]:text-base min-[500px]:font-normal md:text-lg">
            {textCenterTop}
            <br /> {textCenterDown}
          </p>
        </div>
        <button className={`mt-5 md:mt-10 py-4 px-10 ${colorButton} text-white rounded-md min-[500px]:text-xl md:text-2xl`}>
          <Link to={`/rentalcar/${id}`}>{textButton}</Link>
        </button>
        <div className="flex items-center justify-center mt-7  w-full h-auto">
          <img className={`${sizeImage}`} src={image} alt="s" />
        </div>
      </div>
    );
  };
  
  export default Bilbord;
  