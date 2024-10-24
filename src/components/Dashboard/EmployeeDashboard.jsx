import React from "react";
import Header from "../other/header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, onLogout }) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={data} onLogout={onLogout} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
