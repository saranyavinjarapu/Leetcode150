import React from "react";
import styles from "./Layout.module.css";
import InputForm from "../Input/InputForm";
import Problems from "../Problems/Problems";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <header>DSA LEETCODE 150</header>
      <InputForm></InputForm>
      <Problems></Problems>
    </div>
  );
};

export default Layout;
