import React, { useState, useEffect } from "react";
import ListTasks from "./ListTasks";

export default function CreateTasks({ setshowAddAlert, setshowRemoveAlert }) {
  function getTasks() {
    const tasksStore = JSON.parse(localStorage.getItem("tasks"));

    if (tasksStore) {
      return JSON.parse(localStorage.getItem("tasks"));
    }
    return [];
  }
  const [task, setTask] = useState("");
  const [newTasks, setNewTasks] = useState(getTasks());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }, [newTasks]);

  function handleClickKey(e) {
    if (e.key === "Enter") {
      if (task !== "") {
        setNewTasks([
          ...newTasks,
          {
            id: Math.random(),
            description: task,
            toEdit: false,
            checked: false,
          },
        ]);
        setshowAddAlert(true);
        setTask("");
      } else {
        return alert("Fill in the field, before adding!!!");
      }
    }
  }

  return (
    <div id="todoForm">
      <h1 id="title">Todolist</h1>
      <div id="createTask">
        <input
          type="text"
          placeholder='New Task (after typing the task, click "Enter")'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleClickKey}
        />
      </div>

      <ListTasks
        newTasks={newTasks}
        setNewTasks={setNewTasks}
        setshowRemoveAlert={setshowRemoveAlert}
      />
    </div>
  );
}
