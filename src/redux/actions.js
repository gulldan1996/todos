export const ACTION_TYPE = {
  UPDATE_INPUT: 'update_input',
  ADD_ITEM: 'add_item',
  REMOVE_ITEM: 'remove_item',
  TOGGLE_ITEM: 'toggle_item',
  REMOVE_COMPETED: 'remove_completed',
  CHANGE_DISPLAY_MODE: 'change_display_mode',
};

export const updateInput = inputValue => ({
  type: ACTION_TYPE.UPDATE_INPUT,
  inputValue,
});

export const addItem = e => ({
  type: ACTION_TYPE.ADD_ITEM,
  e,
});

export const removeItem = itemId => ({
  type: ACTION_TYPE.REMOVE_ITEM,
  itemId,
});

export const toggleItem = itemId => ({
  type: ACTION_TYPE.TOGGLE_ITEM,
  itemId,
});

export const removeCompleted = mark => ({
  type: ACTION_TYPE.REMOVE_COMPETED,
  mark,
});

export const changeDisplayMode = displayMode => ({
  type: ACTION_TYPE.CHANGE_DISPLAY_MODE,
  displayMode,
});
