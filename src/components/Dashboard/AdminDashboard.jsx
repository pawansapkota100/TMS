import React from "react";
import Header from "../other/header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="h-screen w-full p-10">
      <Header onLogout={onLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
