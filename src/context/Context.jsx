import React, { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const MyContext = createContext();

export function MyContextProvaider(props) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function crearTarea(nuevaTarea) {
    setTask([...task, nuevaTarea]);
  }

  function deleteTask(taskId) {
    console.log(taskId);
    setTask(task.filter((task) => task.id !== taskId));
  }
  return (
    <MyContext.Provider value={{ task, crearTarea, deleteTask }}>
      {props.children}
    </MyContext.Provider>
  );
}
