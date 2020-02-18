import React from 'react';

const MarkAll = ({ todosItems, markAllItems }) => (
  <div className={todosItems.length === 0 ? 'hidden' : null}>
    <input type="checkbox" id="toggle-all" onClick={markAllItems} className="toggle-all" />
    <label htmlFor="toggle-all">Mark all as complete</label>
  </div>
);

export default MarkAll;
