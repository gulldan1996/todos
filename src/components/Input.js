import React from 'react';

const Input = ({ currentValue, updateEditInput, onInputKeyDown, id }) => (
  <input
    onChange={e => updateEditInput(e.target.value)}
    value={currentValue}
    onKeyPress={key => onInputKeyDown(key, id)}
    className="edit"
  />
);

export default Input;
