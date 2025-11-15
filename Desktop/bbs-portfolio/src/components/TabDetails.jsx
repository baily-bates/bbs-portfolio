import React from "react";
import styles from "./TabDetails.module.css";

const TabDetails = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className={styles.blackBackdrop}>
      <div className={styles.details}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default TabDetails;
