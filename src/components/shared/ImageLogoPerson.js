import { Link } from "react-router-dom";

const ImageLogoPerson = ({img}) => {
  return (
    <Link to="/userpanel" className="h-11 rounded-full">
      <img src={img} alt="" className=" w-full h-full" />
    </Link>
  );
};

export default ImageLogoPerson;
