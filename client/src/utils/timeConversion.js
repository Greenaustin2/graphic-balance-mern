//reformat duration string in table

const formatTime = (duration) => {
  // var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  // match = match.slice(1).map(function (x) {
  //   if (x != null) {
  //     return x.replace(/\D/, "");
  //   }
  // });

  // var hours = parseInt(match[0]) || 0;
  // var minutes = parseInt(match[1]) || 0;
  // var seconds = parseInt(match[2]) || 0;
  // var totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // var date = new Date(totalSeconds * 1000);
  // var finalDuration = date.toTimeString().split(" ")[0].slice(3);
  return duration;
};

//reformat publish date in table
const formatDate = (date) => {
  const formattedDate = date.split("T");
  return formattedDate[0];
};

export { formatTime, formatDate };
