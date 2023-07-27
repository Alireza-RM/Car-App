import { toast } from "react-toastify";

const toastFunck = (type, text, position) => {
  if (type === "success") {
    toast.success(text, {
      position: `top-${position}`,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }else{
    toast.error(text, {
        position: `top-${position}`,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  }
};

export {toastFunck}
