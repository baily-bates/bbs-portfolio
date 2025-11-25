import React from "react";
import NameTag from "../assets/name-tag.png";
import Polaroid from "../assets/polaroidAndPin.png";
import TextBubbles from "../assets/textBubbles.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <header>
        <h1 className={styles.heading}>
          <span className={styles.line}></span>
          Meet the Designer & Developer
          <span className={styles.line}></span>
        </h1>
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
        <section className={styles.jobs}>
          <h3 className={styles.prodDesign}>Product Designer</h3>
          <h3 className={styles.creativeTech}>Creative Technologist</h3>
          <h3 className={styles.frontDev}>Front-end Engineer</h3>
          <h3 className={styles.uIDesigner}>UX/UI Designer</h3>
          <h3 className={styles.webDev}>Web Developer</h3>
        </section>
      </main>
    </div>
  );
};

export default Home;
