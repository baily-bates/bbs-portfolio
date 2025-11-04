import React from "react";
import CashConverterTab from "../assets/cashConverterTab.png";
import CollectAndSwap from "../assets/collectAndSwapTab.png";
import SpotifyTab from "../assets/spotifyTab.png";
import DevBlog from "../assets/devBlogTab.png";
import styles from "../pages/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>PROJECTS</h1>
      <main className={styles.tabContainer}>
        <div className={`${styles.tab} ${styles.collectSwapTab}`}>
          <img src={CollectAndSwap} alt="Collect and Swap Platform Tab" />
        </div>
        <div className={`${styles.tab} ${styles.cashConverterTab}`}>
          <img src={CashConverterTab} alt="Cash Conversion App Tab" />
        </div>
        <div className={`${styles.tab} ${styles.spotifyTab}`}>
          <img src={SpotifyTab} alt="Spotify Redesign Tab" />
        </div>
        <div className={`${styles.tab} ${styles.devBlogTab}`}>
          <img src={DevBlog} alt="Developer Blog Tab" />
        </div>
      </main>
    </div>
  );
};

export default Projects;
