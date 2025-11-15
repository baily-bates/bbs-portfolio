import React, { useState } from "react";
import CashConverterTab from "../assets/cashConverterTab.png";
import CollectAndSwapTab from "../assets/collectAndSwapTab.png";
import SpotifyTab from "../assets/spotifyTab.png";
import DevBlogTab from "../assets/devBlogTab.png";
import cashConverterPic from "../assets/cashConverter.png";
import collectSwapPic from "../assets/collectSwap.png";
import spotifyPic from "../assets/spotify.png";
import devBlogPic from "../assets/devBlog.png";
import styles from "../pages/Projects.module.css";
import TabDetails from "../components/TabDetails.jsx";

const projectData = [
  {
    id: "collectSwap",
    image: collectSwapPic,
    name: "Collect & Swap: A Book Trading Platform",
    role: "Web Developer",
    description:
      "A React App for avid book readers to trade books with each other and create book clubs, and find local literary events.",
    links: [
      {
        text: "Figma",
        url: "https://www.figma.com/proto/hMzqO3OHcpkEdtuxSTyTtq/Collect---Swap-App?node-id=1-8&t=SUSoYKWsGPmjiLeD-1",
      },
      {
        text: "Live Site",
        url: "https://collect-and-swap-frontend.onrender.com/profile",
      },
    ],
  },
  {
    id: "cashConverter",
    image: cashConverterPic,
    name: "Cash Converter App",
    role: "UX Designer",
    description: "Currency calculator capable of converting 6 currencies",
    links: [
      {
        text: "Figma",
        url: "https://www.figma.com/proto/uSb5iqIEX5YsTjjBw7h6yS/Currency-App?node-id=0-1&t=cqgZHYBKh5OF1TBc-1",
      },
    ],
  },
  {
    id: "spotify",
    image: spotifyPic,
    name: "Spotify Redesign Project",
    role: "UX Designer and Developer",
    description: "Redesign of Spotify interface for a simple modern approach",
    links: [
      {
        text: "Figma",
        url: "https://www.figma.com/proto/5s2bIu5Y5zAxOpDvH9wmwd/spotfiy-redesign?node-id=1-3&t=CkEVfmFNO94kTrY7-1",
      },
    ],
  },
  {
    id: "devBlog",
    image: devBlogPic,
    name: "Developer Blog",
    role: "Web Developer",
    description:
      "A blog for fellow and new developers to learn and explore what is current in the tech world and best practices.",
    links: [
      {
        text: "Live Website",
        url: "https://bailybatesportfolio.github.io/z",
      },
    ],
  },
];

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>
        <span className={styles.line}></span>
        PROJECTS
        <span className={styles.line}></span>
      </h1>
      <main className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${styles.collectSwapTab}`}
          onClick={() => setActiveModal("collectSwap")}
          style={{ cursor: "pointer" }}
        >
          <img src={CollectAndSwapTab} alt="Collect and Swap Platform Tab" />
        </div>
        <div
          className={`${styles.tab} ${styles.cashConverterTab}`}
          onClick={() => setActiveModal("cashConverter")}
          style={{ cursor: "pointer" }}
        >
          <img src={CashConverterTab} alt="Cash Conversion App Tab" />
        </div>
        <div
          className={`${styles.tab} ${styles.spotifyTab}`}
          onClick={() => setActiveModal("spotify")}
          style={{ cursor: "pointer" }}
        >
          <img src={SpotifyTab} alt="Spotify Redesign Tab" />
        </div>
        <div
          className={`${styles.tab} ${styles.devBlogTab}`}
          onClick={() => setActiveModal("devBlog")}
          style={{ cursor: "pointer" }}
        >
          <img src={DevBlogTab} alt="Developer Blog Tab" />
        </div>
      </main>
      <TabDetails show={!!activeModal} onClose={() => setActiveModal(null)}>
        {activeModal && (
          <>
            <img
              src={projectData.find((p) => p.id === activeModal).image}
              alt={projectData.find((p) => p.id === activeModal).name}
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "12px",
                margin: "1rem",
                // border: ".5px solid #FD9A02",
              }}
            />
            <h2 className={styles.projectName}>
              {projectData.find((p) => p.id === activeModal).name}
            </h2>
            <h3>{projectData.find((p) => p.id === activeModal).role}</h3>
            <p>{projectData.find((p) => p.id === activeModal).description}</p>
            {projectData
              .find((p) => p.id === activeModal)
              .links.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  {link.text}
                </a>
              ))}
          </>
        )}
      </TabDetails>
    </div>
  );
};

export default Projects;
