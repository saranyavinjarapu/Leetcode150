import React, { useEffect, useState } from "react";
import styles from "./Problems.module.css";

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
        <tr>
          <th>Problem</th>
          <th>Solution</th>
          <th>Complexity</th>
        </tr>

        {problems &&
          problems.map((problem) => (
            <tr key={problem.probName}>
              <td>{problem.probName}</td>
              <td>
                <button>Solution</button>
              </td>
              <td>
                <button>Complexity</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default ProblemsList;
