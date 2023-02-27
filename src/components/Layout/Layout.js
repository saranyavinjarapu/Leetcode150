import React from "react";
import styles from "./Layout.module.css";
import InputForm from "../Input/InputForm";
import Problems from "../Problems/Problems";

const Layout = ({ problem_id }) => {
  return (
    <div className={styles.Layout}>
      <InputForm></InputForm>
      <Problems></Problems>
    </div>
  );
};

export default Layout;
