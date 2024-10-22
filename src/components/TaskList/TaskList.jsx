import React from "react";

const TaskList = ({ data }) => {
  return (
    <div
      id="TaskList"
      className="h-[55%] flex items-center justify-start gap-5 overflow-x-auto flex-no-wrap full py-5 mt-10"
    >
      {data.tasks.map((task, index) => (
        <div
          key={index}
          className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl "
        >
          <div className="flex justify-between items-center px-3 py-3 ">
            <h3 className="bg-red-600 text-small px-5 py-2 rounded">High</h3>
            <h3 className="font-bold bg-yellow-300 text-black px-3 py-1 rounded">
              {task.task_categories}
            </h3>
            <h4 className="text-sm">{task.task_date}</h4>
          </div>
          <div className>
            <h2 className="mt-5  text-2xl font-semibold text-center">
              {task.task_title}
            </h2>
            <p className="text-sm mt-2 p-2">{task.task_description}</p>
          </div>
        </div>
      ))}
      {/* <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl ">
        <div className="flex justify-between items-center px-3 py-3 ">
          <h3 className="bg-red-600 text-small px-5 py-2 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <div className>
          <h2 className="mt-5  text-2xl font-semibold text-center">
            Make a Video
          </h2>
          <p className="text-sm mt-2 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            perferendis fugiat laboriosam quos inventore ad dolores quod
            adipisci ullam distinctio. Animi consectetur, vitae rem
            necessitatibus veritatis molestiae. Asperiores, debitis sit.
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl ">
        <div className="flex justify-between items-center px-3 py-3 ">
          <h3 className="bg-red-600 text-small px-5 py-2 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <div className>
          <h2 className="mt-5  text-2xl font-semibold text-center">
            Make a Video
          </h2>
          <p className="text-sm mt-2 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            perferendis fugiat laboriosam quos inventore ad dolores quod
            adipisci ullam distinctio. Animi consectetur, vitae rem
            necessitatibus veritatis molestiae. Asperiores, debitis sit.
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl ">
        <div className="flex justify-between items-center px-3 py-3 ">
          <h3 className="bg-red-600 text-small px-5 py-2 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <div className>
          <h2 className="mt-5  text-2xl font-semibold text-center">
            Make a Video
          </h2>
          <p className="text-sm mt-2 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            perferendis fugiat laboriosam quos inventore ad dolores quod
            adipisci ullam distinctio. Animi consectetur, vitae rem
            necessitatibus veritatis molestiae. Asperiores, debitis sit.
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center px-3 py-3 ">
          <h3 className="bg-red-600 text-small px-5 py-2 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <div className>
          <h2 className="mt-5  text-2xl font-semibold text-center">
            Make a Video
          </h2>
          <p className="text-sm mt-2 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            perferendis fugiat laboriosam quos inventore ad dolores quod
            adipisci ullam distinctio. Animi consectetur, vitae rem
            necessitatibus veritatis molestiae. Asperiores, debitis sit.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default TaskList;
