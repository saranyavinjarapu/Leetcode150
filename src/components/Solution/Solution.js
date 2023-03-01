import React, { useEffect, useState } from "react";
import styles from "../Problems/Problems.module.css";

const Solution = (props) => {
  const { problemId } = props;
  const [solution, setSolution] = useState([]);
  useEffect(() => {
    const solutionByProblemId = JSON.parse(
      localStorage.getItem("problems")
    ).filter((value) => value.probId == problemId);
    console.log(solutionByProblemId);
    setSolution(solutionByProblemId);
  }, []);
  return (
    <table className={styles.ProblemsList}>
      <thead>
        <tr>
          <th>Problem</th>
          <th>Problem Description</th>
        </tr>
      </thead>
      <tbody>
        {solution &&
          solution.map((problem) => (
            <tr key={problem.probId}>
              <td>{problem.probName}</td>
              <td>{problem.probDescription}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Solution;
