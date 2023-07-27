import ModalNavFilter from "./ModalNavFilter";

const ModalNav = ({ isModalNav, setIsModalNav }) => {
  
    

    const closeModal = () => {
      setIsModalNav(!isModalNav);
    };

    return (
      <div className="flex justify-center items-center w-full h-full bg-green-400">
        {isModalNav ? <ModalNavFilter isModalNav={isModalNav} setIsModalNav={setIsModalNav}/>: null}
        {isModalNav ? (
          <div
            onClick={() => closeModal()}
            className="w-full h-full blur-lg bg-gray-400 fixed top-0 left-0 z-10 opacity-[0.5]"
          ></div>
        ) : null}
      </div>
    );
  };
;

export default ModalNav;
