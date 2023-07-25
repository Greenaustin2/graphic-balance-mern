import ReactDOM from "react-dom";
import { useEffect } from "react";
import s from "../css/modal.module.css";

function Modal({ handleClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div onClick={handleClose} className={s.background}></div>
      <div className={s.modalWindow}>
        <div className={s.three}>
          {children}
          <div className={s.four}>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
