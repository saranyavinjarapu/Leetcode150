import React, { useEffect, useState } from "react";
import styles from "./Solution.module.css";

const Solution = (props) => {
  const { problemId } = props;
  const [solution, setSolution] = useState([]);

  useEffect(() => {
    const solutionByProblemId = JSON.parse(
      localStorage.getItem("problems")
    ).filter((value) => value.probId == problemId)[0];

    console.log(solutionByProblemId);
    setSolution(solutionByProblemId);
  }, []);
  return (
    <div className={styles.SolutionContainer}>
      <div className={styles.SolutionItemHeader}>Problem</div>
      <div className={styles.SolutionItemHeader}>Problem Description</div>
      <div className={styles.SolutionItem}>{solution.probName}</div>
      <div className={styles.SolutionItem}>{solution.probDescription}</div>
      <div className={styles.SolutionItemHeader}>Initial Solution</div>
      <div className={styles.SolutionItemHeader}>Best Solution</div>
      <div className={styles.SolutionItem}>7</div>
      <div className={styles.SolutionItem}>8</div>
      <div className={styles.SolutionItemHeader}>Initial Complexity</div>
      <div className={styles.SolutionItemHeader}>Best Complexity</div>
      <div className={styles.SolutionItem}>7</div>
      <div className={styles.SolutionItem}>8</div>
      <div className={styles.SolutionItemHeader}>Thoughts</div>
      <div className={styles.SolutionItemHeader}>Notes</div>
      <div className={styles.SolutionItem}>9</div>
      <div className={styles.SolutionItem}>10</div>
    </div>
  );
};

export default Solution;
