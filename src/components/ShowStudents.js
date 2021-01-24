import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List, StudentContainer } from "../styled";
import MessageGraph from "./MessageGraph";

const ShowStudents = () => {
  const [searchText, setSearchText] = useState("");
  let uniqStudents = useSelector((state) => state.uniqStudents);

  const handleSearch = (e) => {
    const name = e.target.value;
    setSearchText(name);
  };
  uniqStudents = uniqStudents.filter(
    (name) => name.toLowerCase().indexOf(searchText) !== -1
  );
  return (
    <StudentContainer>
      <div className="text">Number of students -{uniqStudents.length}</div>
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="search.."
        />
      </div>
      <List>
        {uniqStudents.length === 0 ? (
          <p className="Error__msg">No Data Found</p>
        ) : (
          <div>
            {uniqStudents.map((ele, i) => {
              return (
                <div className="list" key={i}>
                  <Link className="link" to={`/message/${ele}`}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </List>
      <div>
        <MessageGraph />
      </div>
    </StudentContainer>
  );
};

export default ShowStudents;
