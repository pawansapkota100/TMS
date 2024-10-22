import React from "react";

function CreateTask() {
  return (
    <div className=" bg-[#1c1c1c] mt-10 rounded-xl ">
      <form className="flex flex-wrap w-full items-start gap-10">
        <div className="w-1/3">
          <div>
            <h3 className="text-sm text-gray-400 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-0.5">Assign To</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-400 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              type="text"
              placeholder="Design, Development,etc..."
            />{" "}
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm text-gray-400 mb-0.5">Description</h3>
          <textarea
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter description of the task"
          ></textarea>
          <div className="mt-8">
            <button className="  bg-emerald-600 w-4/5 text-white rounded">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
