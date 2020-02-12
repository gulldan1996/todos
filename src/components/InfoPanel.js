import React from 'react';

const InfoPanel = ({
  itemsLeft,
  display,
  changeDisplayMode,
  todosItems,
  removeCompleted,
}) => (
  <footer className={todosItems.length === 0 ? 'block-none' : 'footer'}>
    <span className="todo-count">{`${itemsLeft.length} items left`}</span>

    <ul className="filters">
      <li>
        <a
          href="#/"
          onClick={() => changeDisplayMode('all')}
          className={display === 'all' ? 'selected' : null}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          onClick={() => changeDisplayMode('active')}
          className={display === 'active' ? 'selected' : null}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          onClick={() => changeDisplayMode('completed')}
          className={display === 'completed' ? 'selected' : null}
        >
          Completed
        </a>
      </li>
    </ul>

    <button
      type="button"
      className="clear-completed"
      onClick={() => removeCompleted()}
    >
      Clear completed
    </button>
  </footer>
);

export default InfoPanel;
