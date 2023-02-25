import React from "react";
import styles from "./Layout.module.css";
import Problems from "../Problems/Problems";

const Layout = ({ problem_id }) => {
  return (
    <div className={styles.Layout}>
      <Problems></Problems>
      <div className={styles.LayoutDescriptionContainer}>hello</div>
    </div>
  );
};

export default Layout;
