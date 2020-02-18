import React from 'react';
import Input from './Input';

const TodoItem = ({
  todosItem,
  removeItem,
  toggleItem,
  completed,
  editInputClick,
  updateEditInput,
  onInputKeyDown,
  currentValue,
}) => {
  const { title, isEditing, id } = todosItem;

  return (
    <>
      {!isEditing ? (
        <li
          className={completed ? 'completed' : null}
          onDoubleClick={() => editInputClick(isEditing, id, title)}
        >
          <div className="view">
            <input
              type="checkbox"
              className="toggle"
              checked={completed}
              onChange={() => toggleItem(id)}
            />
            <label>{title}</label>
            <button
              type="button"
              className="destroy"
              onClick={() => removeItem(id)}
            />
          </div>
        </li>
      ) : (
        <Input
          updateEditInput={updateEditInput}
          inputValue={currentValue}
          onInputKeyDown={onInputKeyDown}
          id={id}
        />
      )}
    </>
  );
};

export default TodoItem;
