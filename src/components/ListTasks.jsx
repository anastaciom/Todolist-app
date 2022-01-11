import Task from './Task';

export default function ListTasks({newTasks, setNewTasks, setshowRemoveAlert}) {
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
            <Task id={task.id} 
            key={task.id} 
            task={task} 
            setNewTasks={setNewTasks} 
            newTasks={newTasks} setshowRemoveAlert={setshowRemoveAlert}/>
            ))
          )}
        </ul>
        </>
    )
}
