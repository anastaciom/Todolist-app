import React, {useState} from 'react'
import { DeleteForever, Edit} from "@mui/icons-material/";

export default function ListTasks({newTasks, setNewTasks, setshowRemoveAlert}) {

    const [taskEdited, setTaskEdited] = useState("");

    function handleClickDelete(id) {
        let filtered = [...newTasks].filter((task) => task.id !== id);
        setNewTasks(filtered);
        setshowRemoveAlert(true);
      }
    
      function handleClickEdit(id) {
        let selected = [...newTasks].find((task) => task.id === id);
        if (selected) {
          selected.toEdit = true;
          setNewTasks([...newTasks]);
        } else {
          selected.toEdit = false;
        }
      }
    
      function handleClickEditFalse(id) {
        let selected = [...newTasks].find((task) => task.id === id);
        if (selected.toEdit) {
          selected.toEdit = false;
          setNewTasks([...newTasks]);
        } else {
          selected.toEdit = true;
        }
      }
    
      function handleChecked(id) {
        let selected = [...newTasks].find((task) => task.id === id);
        if (selected.checked === false) {
          selected.checked = true;
          setNewTasks([...newTasks]);
        } else {
          selected.checked = false;
          setNewTasks([...newTasks]);
        }
      }
    
      function handleClickEditTask(id) {
        let selected = [...newTasks].find((task) => task.id === id);
        if (selected.description) {
          selected.description = taskEdited;
          selected.toEdit = false;
          setNewTasks([...newTasks]);
          setTaskEdited("");
        } else {
          selected.toEdit = true;
        }
      }

    return (
        <>
            <div id="title2">
          <h3>Tasks</h3>
        </div>

        <ul id="listTask">
          {newTasks.length === 0 ? (
            <h1 id="noTasks">No tasks for today :)</h1>
          ) : (
            newTasks.map((task) => (
              <li id={task.id} key={task.id} className="taskItem">
                {task.toEdit ? (
                  <div className="inputEdit">
                    <input
                      type="text"
                      placeholder={task.description}
                      value={taskEdited}
                      onChange={(e) => setTaskEdited(e.target.value)}
                    />
                    <button onClick={() => handleClickEditTask(task.id)}>
                      Edit
                    </button>
                    <button onClick={() => handleClickEditFalse(task.id)}>
                      Back
                    </button>
                  </div>
                ) : (
                  <>
                    <p
                      onClick={() => handleChecked(task.id)}
                      className={task.checked ? "isChecked " : ""}
                    >
                      {task.description.length > 20
                        ? task.description.substring(0, 20) + "..."
                        : task.description}
                    </p>
                    {!task.checked ? (
                      <div className="actions">
                        <button onClick={() => handleClickDelete(task.id)}>
                          <DeleteForever
                            style={{ fontSize: 30, color: "#ff5b5b" }}
                          />
                        </button>
                        <button onClick={() => handleClickEdit(task.id)}>
                          <Edit style={{ fontSize: 30, color: "#5b9dff" }} />
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </li>
            ))
          )}
        </ul>
        </>
    )
}
