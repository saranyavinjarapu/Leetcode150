import React, { useEffect, useState } from "react";
import styles from "./Problems.module.css";
import { Link } from "react-router-dom";

const ProblemsList = () => {
  const [problems, setProblems] = useState([]);

  const deleteProblem = (problemIdToBeDeleted) => {
    problems.splice(
      problems.findIndex((el) => el.probId === problemIdToBeDeleted),
      1
    );
    localStorage.setItem("problems", JSON.stringify(problems));
    window.location.reload(false);
  };
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
            <th>Action</th>
            <th>Problem</th>
            <th>Problem Description</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {problems &&
            problems.map((problem) => (
              <tr key={problem.probId}>
                <td>
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => deleteProblem(problem.probId)}
                  ></i>
                </td>
                <td>{problem.probName}</td>
                <td>{problem.probDescription}</td>
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
