/* eslint-disable react/prop-types */

import {Trash, Check} from "@phosphor-icons/react"

export const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <div key={todo.id} className="content">
          <span>{todo.text}</span>
        </div>
        <div>
          <button onClick={() => completeTodo(todo.id)} className="complete">
          <Check size={25}/>
          </button>
          <button onClick={() => removeTodo(todo.id)} className="complete">
            <Trash size={25}/>
            
          </button>
        </div>
      </div>
    </div>
  );
};
