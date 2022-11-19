import React, { useState } from "react";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const INITIAL_STATE = [
    {
      id: "1",
      value: "this is one",
    },
    {
      id: "2",
      value: "this is two",
    },
    {
      id: "3",
      value: "this is three",
    },
  ];

  const [todo, setTodo] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <Header setTodo={setTodo} />
      <Footer todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
