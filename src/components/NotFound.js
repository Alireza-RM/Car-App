import i404 from "../img/404 Error Page not Found with people connecting a plug.gif"

const NotFound = () => {
  return (
    <div className="h-screen  flex items-center justify-center ">
      <div className="w-full 2xl:max-w-screen-2xl flex items-center justify-center bg-white h-screen">
        <img src={i404} alt="gif"/>
      </div>
    </div>
  );
};

export default NotFound;
