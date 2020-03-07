import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import { removeItem, toggleItem, doubleClickOnInput } from '../redux/actions';

const TodoItem = ({
  todosItem,
  removeItem,
  toggleItem,
  completed,
  doubleClickOnInput,
}) => {
  const { title, isEditing, id } = todosItem;

  return (
    <>
      {!isEditing ? (
        <li
          className={completed ? 'completed' : null}
          onDoubleClick={() => doubleClickOnInput(isEditing, id, title)}
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
        <Input id={id} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id)),
  doubleClickOnInput: (e, id, t) => dispatch(doubleClickOnInput(e, id, t)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
