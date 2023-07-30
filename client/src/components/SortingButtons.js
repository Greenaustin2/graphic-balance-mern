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
    </div>
  );
};

export default SortingButtons;
