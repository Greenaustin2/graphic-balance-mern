import Modal from "./Modal";

const AboutModal = ({ handleClose }) => {
  const actionBar = <button onClick={handleClose}>close</button>;

  return (
    <Modal handleClose={handleClose} actionBar={actionBar}>
      <p>
        Graphic Balance, a web application from Six Finger Hand, attempts to
        present an alternative and artistic look at the depths of the YouTube
        database. Using common in-camera file naming protocol (IMG ####), the
        program generates search query values and auto plays a query result at
        random, presenting to each user a unique and constant stream of largely
        unseen content. Graphic Balance intends to bring value to the antithesis
        of viral culture, as well as shine a light on potential rising stars and
        hopeful artists who have been buried under immeasurable amounts of
        content and algorithmic bias. It is not our intention to draw people
        away from the YouTube platform, but rather to draw them in, and convey
        the cultural importance and vastness of the YouTube Database. We are a
        very small artistic collective, and while we do not expect a lot of web
        traffic, 10,000 quota is only enough for 100 queries. We hope you see as
        much value in this project as we do, and look forward to hearing from
        you.{" "}
      </p>
    </Modal>
  );
};

export default AboutModal;
