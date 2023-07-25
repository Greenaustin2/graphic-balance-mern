import { useState, useEffect } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return { handleClick, handleClose, showModal, setShowModal };
};

export default useModal;
