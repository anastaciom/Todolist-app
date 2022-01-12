import React, { useState, useEffect } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
import CreateTasks from "./components/CreateTasks";

function App() {
  const [showAddAlert, setshowAddAlert] = useState(false);
  const [showRemoveAlert, setshowRemoveAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setshowAddAlert(false);
      setshowRemoveAlert(false);
    }, 3000);
  }, [showAddAlert, showRemoveAlert]);

  return (
    <div className="App">
      <CreateTasks
        setshowAddAlert={setshowAddAlert}
        setshowRemoveAlert={setshowRemoveAlert}
      />
      <Alerts showAddAlert={showAddAlert} showRemoveAlert={showRemoveAlert} />
    </div>
  );
}

export default App;
