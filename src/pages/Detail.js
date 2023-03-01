import React from "react";
import { useParams } from "react-router-dom";
import Solution from "../components/Solution/Solution";

const Detail = () => {
  const { problemId } = useParams();
  return <Solution problemId={problemId}></Solution>;
};

export default Detail;
