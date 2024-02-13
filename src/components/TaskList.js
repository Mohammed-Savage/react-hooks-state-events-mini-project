import React from "react";
import Task from "./Task";

function TaskList({ tasks, category, text, deleteThis }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map(task => (
        <Task key={task.text} task={task} category={task.category} text={task.text} deleteThis={deleteThis}></Task>
      ))}
    </div>
  );
}

export default TaskList;
