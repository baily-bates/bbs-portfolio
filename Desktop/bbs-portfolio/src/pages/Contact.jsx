import React from "react";
import RippedPaper from "../assets/ripped-paper.png";
import PostIt from "../assets/post-it.png";
import Figma from "../assets/figma.png";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import coloredSparkles from "../assets/sparkles.png";
import blackSparkles from "../assets/black-sparkles.png";
import styles from "../pages/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.rippedPaperContainer}>
        <img
          src={RippedPaper}
          alt="Ripped Paper as background"
          className={styles.rippedPaperImage}
        />
      </div>
      <div>
        <img
          src={coloredSparkles}
          alt="Colored Sparkles Graphic"
          className={styles.coloredSparkles}
        />
      </div>
      <section className={styles.info}>
        <h1 className={styles.heading}>Lets Connect</h1>
        <p>Located in Panama City Beach, FL</p>
        <p>Email: batesbailydev@gmail.com</p>
        <p>Phone: (808) 927-4144</p>
      </section>
      <div>
        <img
          src={blackSparkles}
          alt="Black Sparkles"
          className={styles.blackSparkles}
        />
      </div>
      <div className={styles.postItContainer}>
        <img
          src={PostIt}
          alt="Post it note graphic"
          className={styles.postIt}
        />
      </div>
      <div className={styles.logos}>
        <a
          href="https://github.com/baily-bates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="Github Logo" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={Figma} alt="FigmaLogo" />
        </a>
        <a
          href="https://www.linkedin.com/in/baily-bates-53b4b0289/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn Logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
