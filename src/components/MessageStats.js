import React from "react";
import { useSelector } from "react-redux";
const MessageStats = (props) => {
  const students = useSelector((state) => state.students);
  const matchedStudent = students.filter(
    (student) => student.name === props.match.params.name
  );
  return (
    <div className="messageStats">
      <div className="student__name">
        All <span>{matchedStudent.length}</span> Messages of{" "}
        <span>{props.match.params.name}</span>
      </div>

      <div className="table__container">
        <table border="3">
          <thead>
            <tr>
              <th>Time</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {matchedStudent.map((student, i) => {
              return (
                <tr key={i}>
                  <td>{student.time}</td>
                  <td>{student.message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageStats;
