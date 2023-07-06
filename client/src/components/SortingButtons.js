import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import s from "../css/sortingButtons.module.css";

const SortingButtons = ({ loadVideoArchive, sortParameter }) => {
  return (
    <div className={s.sortingButtonsWrapper}>
      <button
        className={s.sortingButtons}
        onClick={() => loadVideoArchive(sortParameter, 1)}
      >
        <GoTriangleUp />
      </button>
      <button
        className={s.sortingButtons}
        onClick={() => loadVideoArchive(sortParameter, -1)}
      >
        <GoTriangleDown />
      </button>
    </div>
  );
};

export default SortingButtons;
