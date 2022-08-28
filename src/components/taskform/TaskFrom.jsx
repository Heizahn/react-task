import React, { useState, useContext } from "react";
import { MyContext } from "../../context/Context";
import "./TaskForm.css";

function TaskFrom() {
  const { task, crearTarea } = useContext(MyContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(task.length);

  const guardarInput = (event) => {
    event.preventDefault();

    const nuevaTarea = {
      title,
      description,
      id,
    };
    crearTarea(nuevaTarea);

    setTitle("");
    setDescription("");
    setId(id + 1);
  };
  return (
    <>
      <form onSubmit={guardarInput} className="addTask">
        <input
          className="addTask__input"
          placeholder="Titulo tarea"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="addTask__textarea"
          placeholder="Descricción de la tarea"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <button className="addTask__button">Guardar</button>
      </form>
    </>
  );
}

export default TaskFrom;
