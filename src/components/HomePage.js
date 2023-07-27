
import Bilbords from "./homePage/Bilbords";
import DropDown from "./homePage/DropDown";
import FixedMenu from "./homePage/FixedMenu";
import ScrollMenu from "./homePage/ScrollMenu";
import ShowMore from "./homePage/ShowMore";

const HomePage = () => {
  return (
    <main className="2xl:max-w-screen-2xl mx-auto">
      <Bilbords/>
      <DropDown/>
      <ScrollMenu/>
      <FixedMenu/>
      <ShowMore url={"/filtercar"} text={"Show More Car"}/>
    </main>
  );
};

export default HomePage;
