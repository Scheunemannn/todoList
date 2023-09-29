/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const isNewTodoEmpty = value.length == 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={isNewTodoEmpty} className="submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
