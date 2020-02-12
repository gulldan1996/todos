import React from 'react';

const MarkAll = ({ todosItems }) => (
  <div className={todosItems.length === 0 ? 'hidden' : null}>
    <input type="checkbox" id="toggle-all" className="toggle-all" />
    <label htmlFor="toggle-all">Mark all as complete</label>
  </div>
);

export default MarkAll;
