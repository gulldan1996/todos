import React from 'react';

const TodoItem = ({
  todosItem,
  removeItem,
  id,
  toggleItem,
  completed,
  display,
  markAll,
}) => (
  <li className={completed ? 'completed' : null}>
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        id={id}
        onClick={() => toggleItem(id, markAll)}
      />
      <label htmlFor={id}>{todosItem.title}</label>
      <button
        type="button"
        className="destroy"
        onClick={() => removeItem(id)}
      />
    </div>
    <input type="text" className="edit" />
  </li>
);

export default TodoItem;
