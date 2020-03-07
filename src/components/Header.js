import React from 'react';
import { connect } from 'react-redux';
import { inputHandler, addItem } from '../redux/actions';
import { inputValueSelect } from '../redux/selectors';

const Header = ({ inputHandler, addItem, inputValue }) => (
  <header className="header">
    <h1>todos</h1>

    <input
      onChange={e => inputHandler(e)}
      onKeyDown={e => addItem(e.key)}
      value={inputValue}
      className="new-todo"
      placeholder="What needs to be done?"
    />
  </header>
);

const mapStateToProps = state => ({
  inputValue: inputValueSelect(state),
});

const mapDispatchToProps = dispatch => ({
  inputHandler: value => dispatch(inputHandler(value)),
  addItem: e => dispatch(addItem(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
