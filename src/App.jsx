import React, { useState, useEffect } from "react";
import "./App.css";
import { DeleteForever, Edit, CheckCircle, Cancel } from "@mui/icons-material/";


function App() {
  const [task, setTask] = useState("");
  const [newTasks, setNewTasks] = useState([]);
  const [showAddAlert, setshowAddAlert] = useState(false);
  const [showRemoveAlert, setshowRemoveAlert] = useState(false);
  const [taskEdited, setTaskEdited] = useState("")
  
  useEffect(() => {
    setTimeout(() => {
      setshowAddAlert(false);
      setshowRemoveAlert(false);
    }, 3000);
  }, [showAddAlert, showRemoveAlert]);


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

  function handleClickDelete(id) {
    let filtered = [...newTasks].filter((task) => task.id !== id);
    setNewTasks(filtered);
    setshowRemoveAlert(true);
  }

  function handleClickEdit(id) {
    let selected = [...newTasks].find((task) => task.id === id);
    if(selected){
        selected.toEdit = true
        setNewTasks([...newTasks])
    }else{
      selected.toEdit = false
    }
  }

  function handleClickEditFalse(id){
    let selected = [...newTasks].find((task) => task.id === id);
    if(selected.toEdit){
        selected.toEdit = false
        setNewTasks([...newTasks])
    }else{
      selected.toEdit = true
    }
  }

  function handleClickEditTask(id){
    let selected = [...newTasks].find((task) => task.id === id);
    if(selected.description){
        selected.description = taskEdited
        selected.toEdit = false
        setNewTasks([...newTasks])
        setTaskEdited('')
    }else{
      selected.toEdit = true
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
          {newTasks.length === 0 ? (
            <h1 id="noTasks">No tasks for today :)</h1>
          ) : (
            newTasks.map((task) => (
              <li id={task.id} key={task.id} className="taskItem">
                {task.toEdit ? <div className="inputEdit">
                  <input 
                  type="text" 
                  placeholder={task.description} 
                  value={taskEdited} 
                  onChange={e=>setTaskEdited(e.target.value)}/>
                  <button onClick={()=>handleClickEditTask(task.id)}>Edit</button>
                  <button onClick={()=>handleClickEditFalse(task.id)}>Back</button>
                </div> : <>
                  <p>
                  {task.description.length > 20
                    ? task.description.substring(0, 20) + "..."
                    : task.description}
                </p>
                <div className="actions">
                  <button onClick={() => handleClickDelete(task.id)}>
                    <DeleteForever style={{ fontSize: 30, color: "#ff5b5b" }} />
                  </button>
                  <button onClick={() => handleClickEdit(task.id)}>
                    <Edit style={{ fontSize: 30, color: "#5b9dff" }} />
                  </button>
                </div>
                </>}
              </li>
            ))
          )}
        </ul>
      </div>

      {showAddAlert || showRemoveAlert ? (
        <div
          className="alert"
          id={
            showAddAlert ? "alert-add" : showRemoveAlert ? "alert-delete" : ""
          }
        >
          {showRemoveAlert ? (
            <span>
              <Cancel style={{ color: "#ff5b5b" }} /> Task removed
            </span>
          ) : (
            <span>
              <CheckCircle style={{ color: "#4fff78" }} /> New task added
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
