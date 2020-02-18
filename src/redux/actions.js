export const ACTION_TYPE = {
  UPDATE_INPUT: 'update_input',
  ADD_ITEM: 'add_item',
  REMOVE_ITEM: 'remove_item',
  TOGGLE_ITEM: 'toggle_item',
  REMOVE_COMPETED: 'remove_completed',
  CHANGE_DISPLAY_MODE: 'change_display_mode',
  MARK_ALL_ITEMS: 'mark_all_items',
  EDIT_INPUT: 'edit_input',
  ON_INPUT_KEY_DOWN: 'on_input_key_down',
  UPDATE_INPUT_EDIT: 'UPDATE_INPUT_EDIT',
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

export const changeDisplayMode = displayMode => ({
  type: ACTION_TYPE.CHANGE_DISPLAY_MODE,
  displayMode,
});

export const removeCompleted = mark => ({
  type: ACTION_TYPE.REMOVE_COMPETED,
  mark,
});

export const markAllItems = () => ({
  type: ACTION_TYPE.MARK_ALL_ITEMS,
});

export const editInputClick = (edit, id, title) => ({
  type: ACTION_TYPE.EDIT_INPUT,
  edit,
  id,
  title,
});

export const onInputKeyDown = (key, id) => ({
  type: ACTION_TYPE.ON_INPUT_KEY_DOWN,
  key,
  id,
});

export const updateEditInput = value => ({
  type: ACTION_TYPE.UPDATE_INPUT_EDIT,
  value,
});
