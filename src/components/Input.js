import React from 'react';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import {
  outsideClick,
  updateInputHandler,
  onInputKeyDown,
} from '../redux/actions';
import { currentValueSelect } from '../redux/selectors';

const Input = ({
  currentValue,
  updateInputHandler,
  onInputKeyDown,
  id,
  outsideClick,
}) => (
  <OutsideClickHandler
    onOutsideClick={() => {
      outsideClick(id);
    }}
  >
    <input
      onChange={e => updateInputHandler(e)}
      value={currentValue}
      onKeyDown={key => onInputKeyDown(key, id)}
      className="edit"
      style={{ paddingLeft: '60px' }}
    />
  </OutsideClickHandler>
);

const mapStateToProps = state => ({
  currentValue: currentValueSelect(state)
});

const mapDispatchToProps = dispatch => ({
  outsideClick: id => dispatch(outsideClick(id)),
  updateInputHandler: e => dispatch(updateInputHandler(e)),
  onInputKeyDown: (key, id) => dispatch(onInputKeyDown(key, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
