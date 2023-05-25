const query = () => {
  // Generates number between 0 and 9999 randomly
  var number = Math.floor(Math.random() * 10000).toString();
  if (number.length === 4) {
    //Prepends file format string
    return "IMG " + number;
  } else {
    //Prepends zeroes to generated number ensuring final value is 4 char in length
    var numLen = 4 - number.length;
    for (let i = 0; i < numLen; i++) {
      number = "0" + number;
    }
    //Prepends file format string
    return "IMG " + number;
  }
};

export default query;
