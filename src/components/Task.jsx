import React, { useState } from "react";
import { DeleteForever, Edit } from "@mui/icons-material/";

export default function Task({
  task,
  setNewTasks,
  newTasks,
  setshowRemoveAlert,
}) {
  const [taskEdited, setTaskEdited] = useState("");

  function handleClickDelete(id) {
    let filtered = [...newTasks].filter((task) => task.id !== id);
    setNewTasks(filtered);
    setshowRemoveAlert(true);
  }

  function handleClickToOpenEditingArea(id) {
    let selected = [...newTasks].find((task) => task.id === id);
    if (selected) {
      selected.toEdit = true;
      setNewTasks([...newTasks]);
    } else {
      selected.toEdit = false;
    }
  }

  function handleClickToCloseEditingArea(id) {
    let selected = [...newTasks].find((task) => task.id === id);
    if (selected.toEdit) {
      selected.toEdit = false;
      setNewTasks([...newTasks]);
    } else {
      selected.toEdit = true;
    }
  }

  function handleTheEditingTask(id) {
    let selected = [...newTasks].find((task) => task.id === id);

    if (selected.description) {

        if(taskEdited !== ''){
            selected.description = taskEdited;
            selected.toEdit = false;
            setNewTasks([...newTasks]);
            setTaskEdited("");
        }else{
            alert('Type something in the "Input", but if you want to keep the previous task click "Back"')
        }
    } else {
      selected.toEdit = true;
    }
  }

  function handleTaskChecked(id) {
    let selected = [...newTasks].find((task) => task.id === id);
    if (selected.checked === false) {
      selected.checked = true;
      setNewTasks([...newTasks]);
    } else {
      selected.checked = false;
      setNewTasks([...newTasks]);
    }
  }

  return (
    <li className="taskItem">
      {task.toEdit ? (
        <div className="inputEdit">
          <input
            type="text"
            placeholder={task.description}
            value={taskEdited}
            onChange={(e) => setTaskEdited(e.target.value)}
          />
          <button onClick={() => handleTheEditingTask(task.id)}>Edit</button>
          <button onClick={() => handleClickToCloseEditingArea(task.id)}>
            Back
          </button>
        </div>
      ) : (
        <>
          <p
            onClick={() => handleTaskChecked(task.id)}
            className={task.checked ? "isChecked " : ""}
          >
            {task.description.length > 20
              ? task.description.substring(0, 20) + "..."
              : task.description}
          </p>
          {!task.checked ? (
            <div className="actions">
              <button onClick={() => handleClickDelete(task.id)}>
                <DeleteForever style={{ fontSize: 30, color: "#ff5b5b" }} />
              </button>
              <button onClick={() => handleClickToOpenEditingArea(task.id)}>
                <Edit style={{ fontSize: 30, color: "#5b9dff" }} />
              </button>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </li>
  );
}
