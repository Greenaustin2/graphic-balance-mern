import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const list = [
  "Helvetica",
  "Arial",
  "Verdana",
  "Tahoma",
  "Trebuchet",
  "Impact",
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
  "Brush Script",
  "Luminari",
  "Comic Sans",
];

const TextAnimation = () => {
  let timer;
  var i = 0;
  const [font, setFont] = useState("Helvetica");

  const updateCount = () => {
    timer =
      !timer &&
      setInterval(() => {
        if (i <= list.length) {
          setFont(list[i]);
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
    <div>
      <h1 style={{ fontFamily: font }}>Graphic Balance</h1>
    </div>
  );
};

export default TextAnimation;
