import React, { useContext } from "react";
import { MyContext } from "../../context/Context";
import "./Task.css";
import { FaTimes } from "react-icons/fa";

const Task = () => {
  const { task, deleteTask } = useContext(MyContext);

  if (task.length === 0) {
    return <h2 className="title">No hay tareas</h2>;
  }
  return (
    <>
      {task.map((item) => {
        return (
          <div key={item.id} className="tarea">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button
              className="tarea__button "
              onClick={() => {
                deleteTask(item.id);
              }}
            >
              <FaTimes />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Task;
