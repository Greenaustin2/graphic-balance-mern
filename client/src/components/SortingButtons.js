const SortingButtons = ({ loadVideoArchive, sortParameter }) => {
  return (
    <div>
      <button onClick={() => loadVideoArchive(sortParameter, 1)}>^</button>
      <button onClick={() => loadVideoArchive(sortParameter, -1)}>V</button>
    </div>
  );
};

export default SortingButtons;
