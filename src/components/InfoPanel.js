import React from 'react';
import { connect } from 'react-redux';
import { itemsLeft, displaySelect, todosItemsSelect } from '../redux/selectors';
import { changeDisplayMode, removeCompleted } from '../redux/actions';

const InfoPanel = ({
  itemLeft,
  display,
  changeDisplayMode,
  todosItems,
  removeCompleted,
}) => (
  <footer className={todosItems.length === 0 ? 'block-none' : 'footer'}>
    <span className="todo-count">{`${itemLeft.length} items left`}</span>
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

const mapStateToProps = state => ({
  itemLeft: itemsLeft(state),
  display: displaySelect(state),
  todosItems: todosItemsSelect(state),
});

const mapDispatchToProps = dispatch => ({
  changeDisplayMode: mode => dispatch(changeDisplayMode(mode)),
  removeCompleted: () => dispatch(removeCompleted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);
