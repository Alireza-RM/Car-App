import { Link } from "react-router-dom";

const FooterLinks = ({headerLine,line1,line2,line3,line4}) => {

    return (
      <div className=" flex flex-col gap-y-3">
        <div className="flex">
          <p className=" inline text-lg xl:text-xl font-semibold mb-2">{headerLine}</p>
        </div>
        <div className="flex">
          <Link className="cursor-pointer inline hover:text-slate-600 xl:text-lg text-slate-400" to="/">
            {line1}
          </Link>
        </div>
        <div className="flex">
          <Link className="cursor-pointer inline hover:text-slate-600 xl:text-lg text-slate-400" to="/">
            {line2}
          </Link>
        </div>
        <div className="flex">
          <Link className="cursor-pointer inline hover:text-slate-600 xl:text-lg text-slate-400" to="/">
            {line3}
          </Link>
        </div>
        <div className="flex">
          <Link className="cursor-pointer inline hover:text-slate-600 xl:text-lg text-slate-400" to="/">
            {line4}
          </Link>
        </div>
      </div>
    );
  };
  
  export default FooterLinks;