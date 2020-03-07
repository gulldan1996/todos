import React from 'react';
import { connect } from 'react-redux';
import { todosItemsSelect } from '../redux/selectors';
import { markAllItems } from '../redux/actions';

const MarkAll = ({ todosItems, markAllItems }) => (
  <div className={todosItems.length === 0 ? 'hidden' : null}>
    <input
      type="checkbox"
      id="toggle-all"
      onClick={markAllItems}
      className="toggle-all"
    />
    <label htmlFor="toggle-all">Mark all as complete</label>
  </div>
);

const mapStateToProps = state => ({
  todosItems: todosItemsSelect(state),
});

const mapDispatchToProps = dispatch => ({
  markAllItems: () => dispatch(markAllItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkAll);
