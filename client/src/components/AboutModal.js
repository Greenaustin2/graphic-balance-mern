import Modal from "./Modal";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import s from "../css/aboutModal.module.css";

const AboutModal = ({ handleClose }) => {
  const navigate = useNavigate();

  //actionBar item used to close the modal or initiate some other action
  const actionBar = (
    <div className={s.privacyPolicy}>
      <button onClick={() => navigate("/privacy-policy")}>
        Privacy Policy
      </button>
      <button onClick={handleClose}>&lt;close&gt;</button>
    </div>
  );
  return (
    <Modal handleClose={handleClose} actionBar={actionBar}>
      {/* Modal child to be displayed as the contents within the modal */}
      <p>
        Graphic Balance is a streaming platform intended to provide alternative
        interaction with the depths of the YouTube database. Using common
        in-camera file naming protocol (IMG 0000), the program generates search
        query values and auto plays a query result at random, presenting to each
        user a virtual Youtube slot machine. The resulting content is quite
        voyeuristic in nature; family vacations, birthday parties, sporting
        events, karaoke nights, most of which were never intended to be viewed
        by the masses. As videos are viewed, users are encouraged to submit
        anything out of the ordinary to the archive where it will be stored and
        indexed. Navigate to the Archive page to view these files in a "greatest
        hits" esque fashion.
      </p>
    </Modal>
  );
};

export default AboutModal;
