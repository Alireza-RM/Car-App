import MainPanel from "./userPanel/MainPanel";
import NavPanel from "./userPanel/NavPanel";

const UserPanel = () => {
  return (
    <main className="2xl:max-w-screen-2xl mx-auto w-full lg:flex lg:flex-row">
      <NavPanel/>
      <MainPanel/>
    </main>

  );
};

export default UserPanel;
