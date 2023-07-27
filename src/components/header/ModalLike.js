import ModalLikeChild from "./ModalLikeChild";

const ModalLike = ({setIsModalLike,isModalLike}) => {

  const closeModal = () => {
    setIsModalLike(!isModalLike);
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-green-400">
      {isModalLike ? <ModalLikeChild closeModal={closeModal}/> : null}
      {isModalLike ? (
        <div
          onClick={() => closeModal()}
          className="w-full h-full blur-lg bg-gray-400 fixed top-0 left-0 z-10 opacity-[0.5]"
        ></div>
      ) : null}

      {/* <button onClick={()=>openModal()}>click</button> */}
    </div>
  );
};

export default ModalLike;
