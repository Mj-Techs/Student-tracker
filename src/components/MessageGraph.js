import React from "react";
import { useSelector } from "react-redux";
import Chart from "react-google-charts";
import { graphData } from "../CalcFunction/graph_data";
const MessageGraph = () => {
  const students = useSelector((state) => state.students);
  const studentObj = graphData(students);
  const chartData = [["student name", "No of messages"]];

  for (const key in studentObj) {
    chartData.push([key, studentObj[key]]);
  }

  return (
    <div className="graph">
      {students.length === 0 ? (
        "Upload your Data File"
      ) : (
        <Chart
          width={"550px"}
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Charts</div>}
          data={chartData}
          options={{
            title: "Messages Distribution",
          }}
        />
      )}
    </div>
  );
};

export default MessageGraph;
