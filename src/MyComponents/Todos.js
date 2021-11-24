import React from "react";
import Todo from "./Todo.js";

export default function Todos({ todos, onDelete }) {
  const myStyle = {
    minHeight: "100vh",
  };

  return (
    <div className="container my=3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {!todos.length
        ? "No todos to display"
        : todos.map((todo) => (
            <>
              <Todo todo={todo} key={todo.sno} onDelete={onDelete} />
              <hr />
            </>
          ))}
    </div>
  );
}
