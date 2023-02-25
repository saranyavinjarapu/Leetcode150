import React, { useRef } from "react";
import styles from "./InputForm.module.css";

const Input = () => {
  const problemName = useRef();
  const problemSolution = useRef();
  const problemComplexity = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  localStorage.removeItem("problems");
    const existingProblemsFromStorage = JSON.parse(
      localStorage.getItem("problems")
    );

    console.log(existingProblemsFromStorage);

    let problems =
      existingProblemsFromStorage && existingProblemsFromStorage.length > 0
        ? existingProblemsFromStorage
        : [];

    if (
      problems.some((problem) => problem.probName === problemName.current.value)
    ) {
      alert("Object found inside the array.");
    } else {
      problems.push({
        probName: problemName.current.value,
        probSolution: problemSolution.current.value,
        probComplexity: problemComplexity.current.value,
      });
      localStorage.setItem("problems", JSON.stringify(problems));
    }
    problemName.current.value =
      problemSolution.current.value =
      problemComplexity.current.value =
        "";
  };
  return (
    <form
      className={styles.Input}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        name="name"
        ref={problemName}
        placeholder="Enter Problem Name"
        required
      />
      <input
        type="text"
        name="solution"
        ref={problemSolution}
        placeholder="Enter Problem Solution"
        required
      />
      <input
        type="text"
        name="complexity"
        ref={problemComplexity}
        placeholder="Enter Problem Complexity"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
