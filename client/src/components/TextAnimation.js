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
  "Luminari",
];

const GraphicBalance = () => {
  var repeatedString = "";
  var text = "GRAPHICBALANCE";
  for (let i = 0; i < 5; i++) {
    repeatedString += text;
  }
  return repeatedString;
};

const TextAnimation = ({
  containerClass,
  textClass,
  interval,
  secondary,
  tertiary,
}) => {
  let timer;
  const [font, setFont] = useState("Helvetica");
  const updateCount = () => {
    timer =
      !timer &&
      setInterval(() => {
        setFont(list[Math.floor(Math.random() * list.length)]);
      }, interval);
  };
  useEffect(() => {
    updateCount();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${containerClass} ${secondary} ${tertiary}`}>
      <p
        className={`${textClass} ${secondary} ${tertiary}`}
        style={{ fontFamily: font }}
      >
        <GraphicBalance />
      </p>
    </div>
  );
};

export default TextAnimation;
