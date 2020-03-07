import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MarkAll from './MarkAll';
import InfoPanel from './InfoPanel';
import TodoItem from './TodoItem';
import { getLocalStorage } from '../redux/actions';
import { filtered, todosItemsSelect } from '../redux/selectors';

const Todo = ({ todosItems, filteredItem, getLocalStorage }) => {
  useEffect(() => {
    const data = localStorage.getItem('myData');

    getLocalStorage(data);
  }, [getLocalStorage]);

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(todosItems));
  }, [todosItems]);

  return (
    <section className="todoapp">
      <Header />

      <section className="main">
        <MarkAll />

        <ul className="todo-list">
          {filteredItem.length !== 0
            ? filteredItem.map((todos) => {
              const { id, completed } = todos;

              return (
                <TodoItem todosItem={todos} key={id} completed={completed} />
              );
            })
            : null}
        </ul>
      </section>

      <InfoPanel />
    </section>
  );
};

const mapStateToProps = state => ({
  filteredItem: filtered(state),
  todosItems: todosItemsSelect(state),
});

const mapDispatchToProps = dispatch => ({
  getLocalStorage: data => dispatch(getLocalStorage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
