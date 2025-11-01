import React from "react";
import ComputerScreen from "../assets/computerScreen.png";
import CashConverterTab from "../assets/cashConverterTab.png";
import CollectAndSwap from "../assets/collect&swapTab.png";
import SpotifyTab from "../assets/spotifyTab.png";
import DevBlog from "../assets/devBlogTab.png";
import styles from "../pages/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.computerScreenLayer}>
        <img
          src={ComputerScreen}
          alt="Computer Screen Graphic"
          className={styles.computerGraphic}
        />
      </div>

      {/* All Tabs Container */}
      <main className={styles.allTabContainers}>
        {/* Collect and Swap */}
        <div className={styles.tab}>
          <img
            src={CollectAndSwap}
            about="Collect and Swap Platform Project Tab"
          />
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <h3>Collect & Swap</h3>
              <p>A platform for trading and collecting items.</p>
              <button className={styles.linkButton}>Figma Design</button>
              <button className={styles.linkButton}>Live Site</button>
            </div>
          </div>
        </div>

        {/* Cash Converter */}
        <div className={styles.tab}>
          <img src={CashConverterTab} alt="Cash Converter Project Tab" />
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <h3>Cash Converter</h3>
              <p>An application to convert and manage currency conversion.</p>
              <button className={styles.linkButton}>Figma</button>
            </div>
          </div>
        </div>

        {/* Spotify */}
        <div className={styles.tab}>
          <img src={SpotifyTab} alt="Spotify Redesign Project Tab" />
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <h3>Spotify Redesign</h3>
              <p>A modern redesign of Spotify's interface.</p>
              <button className={styles.linkButton}>Figma</button>
            </div>
          </div>
        </div>

        {/* Dev Blog */}
        <div className={styles.tab}>
          <img src={DevBlog} alt="Developer Blog Project Tab" />
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <h3>Developer Blog</h3>
              <p>An informational blog for developers.</p>
              <button className={styles.linkButton}>Live Site</button>
            </div>
          </div>
        </div>
      </main>

      <h1 className={styles.heading}>PROJECTS</h1>
    </div>
  );
};

export default Projects;
