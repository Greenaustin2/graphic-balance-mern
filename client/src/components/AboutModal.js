import Modal from "./Modal";

const AboutModal = ({ handleClose }) => {
  const actionBar = <button onClick={handleClose}>&lt;close&gt;</button>;

  return (
    <Modal handleClose={handleClose} actionBar={actionBar}>
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
