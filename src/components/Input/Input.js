import React from "react";
import styles from "./Input.module.css";

const Input = () => {
  return (
    <div className={styles.Input}>
      <input type="text" placeholder="Enter Problem Name" />
      <input type="textarea" placeholder="Enter Code Solution" />
      <input type="textarea" placeholder="Enter Time-Space Complexity" />
      <button>Submit</button>
    </div>
  );
};

export default Input;
