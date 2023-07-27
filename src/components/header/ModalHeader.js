import ModalSearch from "./ModalSearch";

const ModalHeader= ({isModalSearch, setIsModalSearch}) => {



  const closeModal = () => {
    setIsModalSearch(!isModalSearch);
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-green-400">
      {isModalSearch ?<ModalSearch closeModal={closeModal}/>:null}
      {isModalSearch ?
      <div onClick={()=>closeModal()} className="w-full h-full blur-lg bg-gray-400 fixed top-0 left-0 z-10 opacity-[0.5]">
        
      </div>:null}

      {/* <button onClick={()=>openModal()}>click</button> */}
    </div>
  );
}

export default ModalHeader;