import { useEffect, useState } from "react";

const list = [
  "Helvetica",
  "Arial",
  "Verdana",
  "Tahoma",
  "Trebuchet",
  // "Impact",
  "Gill Sans",
  "Times New Roman",
  "Georgia",
  "Palatino",
  "Baskerville",
  "Andalé Mono",
  "Courier",
  "Lucida",
  "Monaco",
  "Bradley",
  // "Brush Script",
  "Luminari",
  // "Comic` Sans",
];

const GraphicBalance = () => {
  var repeatedString = "";
  var text = "GRAPHICBALANCE";
  for (let i = 0; i < 5; i++) {
    repeatedString += text;
    console.log(text);
  }
  return repeatedString;
};

const TextAnimation = () => {
  let timer;
  var i = 0;
  const [font, setFont] = useState("Helvetica");
  // const [color, setColor] = -useState("black");

  // var randomColor = "#000000".replace(/0/g, function () {
  //   return (~~(Math.random() * 16)).toString(16);
  // });
  const updateCount = () => {
    timer =
      !timer &&
      setInterval(() => {
        if (i <= list.length - 1) {
          setFont(list[i]);
          // setColor(randomColor);
          i += 1;
        } else {
          i = 0;
        }
      }, 100);
  };
  useEffect(() => {
    updateCount();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-animation-container">
      <p className="text-animation" style={{ fontFamily: font }}>
        <GraphicBalance />
        <GraphicBalance />
      </p>
    </div>
  );
};

export default TextAnimation;
