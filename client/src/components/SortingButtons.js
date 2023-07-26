import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useState } from "react";
import s from "../css/sortingButtons.module.css";

const SortingButtons = ({ loadVideoArchive, sortParameter }) => {
  const [sortDirection, setSortDirection] = useState(false);

  const handleClick = () => {
    const sortDirectionVariable = sortDirection ? 1 : -1;
    setSortDirection(!sortDirection);
    loadVideoArchive(sortParameter, sortDirectionVariable);
  };
  return (
    <div className={s.sortingButtonsWrapper}>
      <button className={s.sortingButtons} onClick={handleClick}>
        {sortDirection ? <GoTriangleUp /> : <GoTriangleDown />}
      </button>
      {/* <button
        className={s.sortingButtons}
        onClick={() => loadVideoArchive(sortParameter, -1)}
      >
        <GoTriangleDown />
      </button> */}
    </div>
  );
};

export default SortingButtons;
