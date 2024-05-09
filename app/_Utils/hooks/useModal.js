"useClient";
import { useState } from "react";

function useModal({ onClose = () => null }) {
  const [isopen, setIsOpen] = useState(0);
  const [data, setData] = useState();
  const openmodal = (data) => {
    setData(data);
    setIsOpen(1);
  };
  const closemodal = () => {
    setData(null);
    setIsOpen(0);
    onClose();
  };
  const toggleModal = () => {
    setIsOpen(!isopen);
    if (isopen) {
      setData(null);
      onClose();
    }
  };

  return {
    isopen,
    data,
    openmodal,
    closemodal,
    toggleModal,
  };
}

export default useModal;
