import React from "react";
import styles from "./Problems.module.css";
import ProblemsList from "./ProblemsList";
import ProblemDescription from "./ProblemDescription";

const Problems = () => {
  return (
    <div className={styles.Problems}>
      <ProblemsList></ProblemsList>
      <ProblemDescription></ProblemDescription>
    </div>
  );
};

export default Problems;
