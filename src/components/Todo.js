import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MarkAll from './MarkAll';
import InfoPanel from './InfoPanel';
import TodoItem from './TodoItem';
import {
  updateInput,
  addItem,
  removeItem,
  toggleItem,
  changeDisplayMode,
  removeCompleted,
} from '../redux/actions';
import { itemsLeft } from '../redux/selectors';

const Todo = ({
  updateInput,
  addItem,
  inputValue,
  todosItems,
  removeItem,
  toggleItem,
  itemsLeft,
  display,
  changeDisplayMode,
  removeCompleted,
}) => {

  return (
    <section className="todoapp">
      <Header
        updateInput={updateInput}
        addItem={addItem}
        inputValue={inputValue}
      />

      <section className="main">
        <MarkAll todosItems={todosItems} />

        <ul className="todo-list">
          {todosItems.length !== 0
            ? todosItems.map((todos) => {
              const { id, completed } = todos;

              return (
                <TodoItem
                  todosItem={todos}
                  toggleItem={toggleItem}
                  key={id}
                  id={id}
                  removeItem={removeItem}
                  completed={completed}
                  itemsLeft={itemsLeft}
                  display={display}
                />
              );
            })
            : null}
        </ul>
      </section>

      <InfoPanel
        itemsLeft={itemsLeft}
        display={display}
        changeDisplayMode={changeDisplayMode}
        todosItems={todosItems}
        removeCompleted={removeCompleted}
      />
    </section>
  );
};

const mapStateToProps = state => ({
  inputValue: state.input,
  display: state.display,
  id: state.nextId,
  todosItems: state.items,
  itemsLeft: itemsLeft(state),
});

const mapDispatchToProps = dispatch => ({
  updateInput: value => dispatch(updateInput(value)),
  addItem: e => dispatch(addItem(e)),
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id)),
  changeDisplayMode: mode => dispatch(changeDisplayMode(mode)),
  removeCompleted: () => dispatch(removeCompleted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
