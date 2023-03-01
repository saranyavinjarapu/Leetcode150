import React from "react";
import styles from "./Solution.module.css";

const Solution = (props) => {
  const { problemId } = props;
  return (
    <div>
      <h1>{problemId}</h1>
    </div>
  );
};

export default Solution;
