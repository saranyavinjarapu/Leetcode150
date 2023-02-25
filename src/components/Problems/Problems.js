import React from "react";
import styles from "./Problems.module.css";

const Problems = () => {
  return (
    <div className={styles.ProblemItemsContainer}>
      <div className={styles.ProblemName}>Problem Name </div>
      <div className={styles.ProblemButtonGroup}>
        <button>Solution</button>
        <button>Complexity</button>
      </div>
    </div>
  );
};

export default Problems;
