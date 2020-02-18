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
  markAllItems,
  editInputClick,
  onInputKeyDown,
  updateEditInput,
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
  markAllItems,
  editInputClick,
  onInputKeyDown,
  currentValue,
  updateEditInput,
}) => {
  const filterCompleted = todosItems.filter(i => i.completed);
  const filterActive = todosItems.filter(i => !i.completed);
  let filteredItem;

  if (display === 'all') {
    filteredItem = todosItems;
  }

  if (display === 'completed') {
    filteredItem = filterCompleted;
  }

  if (display === 'active') {
    filteredItem = filterActive;
  }

  return (
    <section className="todoapp">
      <Header
        updateInput={updateInput}
        addItem={addItem}
        inputValue={inputValue}
      />

      <section className="main">
        <MarkAll todosItems={todosItems} markAllItems={markAllItems} />

        <ul className="todo-list">
          {filteredItem.length !== 0
            ? filteredItem.map(todos => {
              const { id, completed } = todos;

              return (
                <TodoItem
                  todosItem={todos}
                  toggleItem={toggleItem}
                  key={id}
                  removeItem={removeItem}
                  completed={completed}
                  display={display}
                  editInputClick={editInputClick}
                  updateEditInput={updateEditInput}
                  addItem={addItem}
                  itemsLeft={itemsLeft}
                  currentValue={currentValue}
                  onInputKeyDown={onInputKeyDown}
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
  currentValue: state.currentValue,
});

const mapDispatchToProps = dispatch => ({
  updateInput: value => dispatch(updateInput(value)),
  addItem: e => dispatch(addItem(e)),
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id)),
  changeDisplayMode: mode => dispatch(changeDisplayMode(mode)),
  removeCompleted: () => dispatch(removeCompleted()),
  markAllItems: () => dispatch(markAllItems()),
  editInputClick: (e, id, title) => dispatch(editInputClick(e, id, title)),
  onInputKeyDown: (key, id) => dispatch(onInputKeyDown(key, id)),
  updateEditInput: v => dispatch(updateEditInput(v)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
