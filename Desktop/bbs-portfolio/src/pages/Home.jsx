import React from "react";
import NameTag from "../assets/name-tag.png";
import Polaroid from "../assets/polaroidAndPin.png";
import TextBubbles from "../assets/textBubbles.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <header>
        <h1 className={styles.heading}>Meet the Designer & Developer</h1>
      </header>
      <main className={styles.flexContainer}>
        <div className={styles.orangeBubbleContainer}>
          <img
            src={TextBubbles}
            alt="Orange Bubble for Background"
            className={styles.orangeBubble}
          />
        </div>

        <div className={styles.polaroidContainer}>
          <img
            src={Polaroid}
            alt="Polaroid of designers headshot"
            className={styles.polaroid}
          />
          <img
            src={NameTag}
            alt="Name Tag Graphic"
            className={styles.nameTag}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
