import React, { useState } from "react";
import "./App.css";
import { DeleteForever, Edit } from "@mui/icons-material/";

function App() {
  const [task, setTask] = useState("");

  const [newTasks, setNewTasks] = useState([]);

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
        setTask("");
      } else {
        return alert("Fill in the field, before adding!!!");
      }
    }
  }

  return (
    <div className="App">
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

        <div id="title2">
          <h3>Tasks</h3>
        </div>

        <ul id="listTask">
          {newTasks.length === 0 ? 
            <h1 id="noTasks">No tasks for today :)</h1>: 
            newTasks.map((task) => (
              <li id={task.id} key={task.id} className="taskItem">
                <p>{task.description}</p>
                <div className="actions">
                  <button>
                    <DeleteForever style={{ fontSize: 30, color: "#ff5b5b" }} />
                  </button>
                  <button>
                    <Edit style={{ fontSize: 30, color: "#5b9dff" }} />
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
