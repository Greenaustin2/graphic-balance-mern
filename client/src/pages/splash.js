import React from "react";
import { useNavigate } from "react-router";
import TextAnimation from "../components/TextAnimation";
import s from "../css/splash.module.css";

const Splash = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/main");
  };

  return (
    <div className={s.splash}>
      <TextAnimation
        containerClass={s.textAnimationContainer}
        textClass={s.textAnimation}
        interval={400}
      />
      <TextAnimation
        containerClass={s.textAnimationContainer}
        textClass={s.textAnimation}
        secondary={s.secondary}
        interval={300}
      />
      <TextAnimation
        containerClass={s.textAnimationContainer}
        textClass={s.textAnimation}
        tertiary={s.tertiary}
        interval={200}
      />
      {/* <h1 className={s.splashHeader}>GRAPHIC BALANCE</h1> */}
      {/* <div className="circle"></div> */}
      <form onSubmit={handleSubmit}>
        <input className={s.navButton} type="submit" value="enter" />
      </form>
    </div>
  );
};

export default Splash;
