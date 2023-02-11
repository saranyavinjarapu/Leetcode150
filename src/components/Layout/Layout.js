import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ problem_id }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.LayoutItemsContainer}>
        <div className={styles.ProblemName}>Problem Name </div>
        <div className={styles.LayoutButtonGroup}>
          <button>Solution</button>
          <button>Complexity</button>
        </div>
      </div>
      <div className={styles.LayoutDescriptionContainer}>hello</div>
    </div>
  );
};

export default Layout;
