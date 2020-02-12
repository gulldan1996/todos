import React from 'react';

const Header = ({ updateInput, addItem, inputValue }) => (
  <header className="header">
    <h1>todos</h1>

    <input
      onChange={e => updateInput(e.target.value)}
      onKeyDown={e => addItem(e.key)}
      value={inputValue}
      className="new-todo"
      placeholder="What needs to be done?"
    />
  </header>
);

export default Header;
