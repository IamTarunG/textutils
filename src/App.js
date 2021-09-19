import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import Cout from "./Components/Cout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [cbc, setCbc] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const hmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      setCbc({
        backgroundColor: "black",
        color: "white",
      });
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      // document.title = "TextUtils - Light Mode";
      setCbc({
        backgroundColor: "white",
        color: "black",
      });
    }

    // setTimeout(() => {
    //   document.title = "textUtils is amazing";
    // }, 2000);
    // setTimeout(() => {
    //   document.title = "Install textUtils Now";
    // }, 1000);
  };

  const redMode = () => {
    document.body.style.backgroundColor = "#e27d60";
  };

  const purpleMode = () => {
    document.body.style.backgroundColor = "#242582";
  };
  const reedMode = () => {
    document.body.style.backgroundColor = "#f64c72";
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          handleMode={hmode}
          aboutText="About Us"
          rMode={redMode}
          pMode={purpleMode}
          reMode={reedMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm
                heading="Enter the Text Below"
                salert={showAlert}
                mode={mode}
                chanbc={cbc}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
