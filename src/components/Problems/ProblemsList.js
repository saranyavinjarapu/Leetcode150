import React, { useEffect, useState } from "react";
import styles from "./Problems.module.css";
import { Link } from "react-router-dom";

const ProblemsList = () => {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    const existingProblemsFromStorage = JSON.parse(
      localStorage.getItem("problems")
    );
    setProblems(existingProblemsFromStorage);
  }, []);
  return (
    <div className={styles.ProblemListContainer}>
      <table className={styles.ProblemsList}>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Problem Description</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {problems &&
            problems.map((problem) => (
              <tr key={problem.probName}>
                <td>{problem.probName}</td>
                <td>{problem.probName}</td>
                <td>
                  <Link to={`/detail/${problem.probId}`} target="_blank">
                    <button>Solution</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemsList;
