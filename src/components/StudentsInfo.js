import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const StudentsInfo = () => {
  const [file, setFile] = useState("");
  const [chatData, setChatData] = useState([]);
  console.log(typeof chatData);
  const students = useSelector((state) => state.students);
  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = (e) => {
      const data = e.target.result.split("\n");
      setChatData(data);
    };
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFile} />
          <button type="submit">save</button>
        </form>
      </div>
      <h1>Students details-{chatData.length}</h1>
      {chatData.length !== 0 && (
        <ul>
          {chatData.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentsInfo;
