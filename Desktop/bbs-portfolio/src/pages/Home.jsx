import React from "react";
import NameTag from "../assets/name-tag.png";
import Polaroid from "../assets/polaroidAndPin.png";
import OrangeBubble from "../assets/orange-bubble.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>Meet the Designer & Developer</h1>
      <main className={styles.flexContainer}>
        <div className={styles.orangeBubbleContainer}>
          <img
            src={OrangeBubble}
            alt="Orange Bubble for Background"
            className={styles.orangeBubble}
          />
          <p className={styles.orangeBubbleText}>
            I'm a recent graduate from Full Sail University with a bachelor's in
            computer science, based in Panama City Beach, Florida. I specialize
            in front-end development, user experience, and creating designs that
            prioritize the user. My focus is on crafting intuitive and engaging
            digital experiences. Let’s build something functional, creative, and
            memorable!
          </p>
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
