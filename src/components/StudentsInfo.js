import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataExtract } from "../CalcFunction/dataExtraction";
import { getStudent, getUniqStudents } from "../actions/studentAction";
import ShowStudents from "./ShowStudents";
import { Button, Container, Header } from "../styled";

const StudentsInfo = () => {
  const [file, setFile] = useState("");
  const dispatch = useDispatch();

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = (e) => {
      const data = dataExtract(e.target.result);
      dispatch(getStudent(data));
      dispatch(getUniqStudents(data));
    };
  };
  return (
    <Container>
      <Header>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFile} />
            <Button type="submit">upload</Button>
          </form>
        </div>
      </Header>
      <div>
        <ShowStudents />
      </div>
    </Container>
  );
};

export default StudentsInfo;
