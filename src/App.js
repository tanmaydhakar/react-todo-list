import "./App.css";
import Header from "./MyComponents/Header.js";
import Footer from "./MyComponents/Footer.js";
import Todo from "./MyComponents/Todo.js";
import Todos from "./MyComponents/Todos.js";
import AddToDo from "./MyComponents/AddToDo.js";
import About from "./MyComponents/About.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((todoData) => {
        return todoData !== todo;
      })
    );
  };

  const addToDo = function (title, desc) {
    const todo = {
      sno: (todos.length && todos[todos.length - 1].sno + 1) || 1,
      title,
      description: desc,
    };
    setTodos([...todos, todo]);
  };

  const [todos, setTodos] = useState(
    (localStorage.getItem("todos") &&
      JSON.parse(localStorage.getItem("todos"))) ||
      []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddToDo addToDo={addToDo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route
            path="/about"
            element={<About todos={todos} onDelete={onDelete} />}
          />
        </Routes>
        <Todo />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
