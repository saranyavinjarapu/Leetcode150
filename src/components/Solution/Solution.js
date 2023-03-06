import React, { useEffect, useState } from "react";
import styles from "./Solution.module.css";
import globalStyles from "../../styles/Globals.module.css";

const Solution = (props) => {
  const { problemId } = props;
  const [solution, setSolution] = useState([]);

  const t1 = `body padding: 50px font: 1em Helvetica Neue, Helvetica, Arial, sans-serif;
  grid 
    border px solid rgb(111,41,97);
    display grid
    grid-template-areas
      "one one one two"
      "one one two two"
      "three three four four"
      "three three four four";
    gap: 10px
    grid-template-columnsrepeat(4, 1fr);
    grid-template-rowsrepeat(4, 100px);
    inline-size 500px;
  }
  
  .grid > * {
    background-color: rgba(111,41,97,.4);
    border-radius: 5px;
    padding: 10px;
  }
  
  .one {
    grid-area: one;
  } 
  .two {
    grid-area: two;
  }
  .three {
    grid-area: three;
  }
  .four {
    grid-area: four;
  }`;

  useEffect(() => {
    const solutionByProblemId = JSON.parse(
      localStorage.getItem("problems")
    ).filter((value) => value.probId === problemId)[0];

    console.log(solutionByProblemId);
    setSolution(solutionByProblemId);
  }, [problemId]);
  return (
    <div className={styles.SolutionContainer}>
      <table className={globalStyles.Table + " " + styles.ProblemTable}>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Problem Description</th>
            <th>Difficulty Level</th>
            <th>Problem Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{solution.probName}</td>
            <td className={styles.ProblemDescription}>
              {solution.probDescription}
            </td>
            <td style={{ width: "30px" }}>Difficult</td>
            <td>Link</td>
          </tr>
        </tbody>
      </table>
      <table className={globalStyles.Table + " " + styles.SolutionTable}>
        <thead>
          <tr>
            <th>Initial Solution</th>
            <th>Initial Complexity</th>
            <th>Best Solution</th>
            <th>Best Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.SolutionDescription}>
                {t1}
                {t1}
                {t1}
              </div>
            </td>
            <td style={{ width: "30px" }}>I Complexity</td>
            <td>
              <div className={styles.SolutionDescription}>
                {t1}
                {t1}
                {t1}
              </div>
            </td>
            <td style={{ width: "30px" }}>B complexity</td>
          </tr>
        </tbody>
      </table>
      <table className={globalStyles.Table + " " + styles.NotesTable}>
        <thead>
          <tr>
            <th>Thoughts</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.SolutionDescription}>I Solution</div>
            </td>
            <td>
              <div className={styles.SolutionDescription}>B solution</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Solution;
