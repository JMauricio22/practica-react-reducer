import React from "react";
import UseState from "./UseState";
import UseReducer from "./UseReducer";
import "./App.css";
// import ClassState from "./ClassState";

function App() {
  return (
    <div className='App'>
      <UseReducer />
      <UseState />
      {/* <ClassState /> */}
    </div>
  );
}

export default App;
