import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-xl font-bold mb-4 text-gray-700">To-Do Ro'yxati</h1>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Vazifa kiriting..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Qo'shish
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                O'chirish
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
