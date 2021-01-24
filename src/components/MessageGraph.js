import React from "react";
import { useSelector } from "react-redux";
const MessageGraph = () => {
  const students = useSelector((state) => state.students);
  const studentObj = {};

  return (
    <div>
      <h1>MessageGraph</h1>
    </div>
  );
};

export default MessageGraph;
