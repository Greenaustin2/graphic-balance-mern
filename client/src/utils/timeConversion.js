//reformat duration string in table

const formatTime = (duration) => {
  // const formattedTime = duration.replace("PT", "");
  //   .replace("H", ":")
  //   .replace("M", ":")
  //   .replace("S", "");
  // return formattedTime;
  // 00:00:00
  return duration;
};

//reformat publish date in table
const formatDate = (date) => {
  const formattedDate = date.split("T");
  return formattedDate[0];
};

export { formatTime, formatDate };
