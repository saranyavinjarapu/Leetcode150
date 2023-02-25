import React, { useState } from "react";
import styles from "./InputForm.module.css";

const Input = () => {
  const [problemName, setProblemName] = useState("");
  const [problemSolution, setProblemSolution] = useState("");
  const [problemComplexity, setProblemComplexity] = useState("");

  const saveDataToJson = (data, file) => {
    const saveFinished = (error) => {
      if (error) {
        console.log(error);
        return;
      }
    };
    const jsonData = JSON.stringify(data);
    // fs.writeFile(file, jsonData, saveFinished);
  };
  const handleSubmit = (e) => {
    console.log(problemName, problemSolution, problemComplexity);
    e.preventDefault();
    setProblemName("");
    setProblemSolution("");
    setProblemComplexity("");
    const dog = {
      name: "dolly",
      breed: "street",
      color: "grey",
    };
    saveDataToJson(dog, "problemData.json");
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
        name="problemName"
        value={problemName}
        onChange={(e) => setProblemName(e.target.value)}
        placeholder="Enter Problem Name"
        required
      />
      <input
        type="text"
        name="problemSolution"
        value={problemSolution}
        onChange={(e) => setProblemSolution(e.target.value)}
        placeholder="Enter Problem Solution"
        required
      />
      <input
        type="text"
        name="problemComplexity"
        value={problemComplexity}
        onChange={(e) => setProblemComplexity(e.target.value)}
        placeholder="Enter Problem Complexity"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
