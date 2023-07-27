import { Link } from "react-router-dom";

const ShowMore = ({url,text}) => {
  return (
    <div className="flex flex-row items-center p-6 justify-end gap-x-0 my-8">
      <div className=" flex flex-row justify-center items-center flex-auto pl-16">
        <button className=" py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-md min-[500px]:text-lg xl:text-xl">
          <Link to={`${url}`}>{text}</Link>
        </button>
      </div>

      <div className="flex w-14 h-6  py-4 flex-row justify-start items-center">
        <p className="text-slate-400 font-medium">120 Car</p>
      </div>
    </div>
  );
};

export default ShowMore;
