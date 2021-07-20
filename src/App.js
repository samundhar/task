import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <span className="title">TASK</span> <br />
      <TodoApp />
    </div>
  );
}

export default App;