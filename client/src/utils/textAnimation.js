import { useEffect, useState } from "react";

const list = [
  "Helvetica",
  "Arial",
  "Verdana",
  "Tahoma",
  "Trebuchet",
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

const TextAnimation = ({ containerClass, textClass, interval }) => {
  let timer;

  // var i = 0;
  const [font, setFont] = useState("Helvetica");
  // const [color, setColor] = -useState("black");

  // var randomColor = "#000000".replace(/0/g, function () {
  //   return (~~(Math.random() * 16)).toString(16);
  // });

  const updateCount = () => {
    timer =
      !timer &&
      setInterval(() => {
        // if (i <= list.length - listIndex) {
        //   setFont(list[i]);
        //   i += 1;
        // } else {
        //   i = 0;
        // }
        console.log(interval);
        setFont(list[Math.floor(Math.random() * list.length)]);
      }, interval);
  };
  useEffect(() => {
    updateCount();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={containerClass}>
      <p className={textClass} style={{ fontFamily: font }}>
        <GraphicBalance />
      </p>
    </div>
  );
};

export default TextAnimation;
