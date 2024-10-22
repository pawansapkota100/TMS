import React from "react";

const TaskListNumber = ({ data }) => {
  const totalActive = data.tasks.filter((task) => task.active).length;
  const totalNew = data.tasks.filter((task) => task.new_task).length;
  const totalCompleted = data.tasks.filter((task) => task.completed).length;
  const totalFailed = data.tasks.filter((task) => task.failed).length;
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="px-10 py-5 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-3xl">{totalNew}</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
      <div className="px-10 py-5 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-3xl">{totalCompleted}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>
      <div className="px-10 py-5 rounded-xl w-[45%] bg-green-400">
        <h2 className="text-3xl">{totalActive}</h2>
        <h3 className="text-xl font-medium">Accept Tasks</h3>
      </div>
      <div className="px-10 py-5 rounded-xl w-[45%] bg-yellow-400">
        <h2 className="text-3xl">{totalFailed}</h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
