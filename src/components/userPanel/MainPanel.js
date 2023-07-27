import BottomRightPanel from "./BottomRightPanel";
import TopLeftPanel from "./TopLeftPanel";

const MainPanel = () => {
  return (
    <div className="lg:w-4/5">
      <div className="flex flex-col lg:flex-row gap-y-5 p-6  lg:gap-x-7 ">
        <TopLeftPanel/>
        <BottomRightPanel/>
      </div>
    </div>
  );
};

export default MainPanel;
