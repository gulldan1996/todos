export const ACTION_TYPE = {
  INPUT_HANDLER: 'INPUT_HANDLER',
  ADD_ITEM: 'add_item',
  REMOVE_ITEM: 'remove_item',
  TOGGLE_ITEM: 'toggle_item',
  REMOVE_COMPETED: 'remove_completed',
  CHANGE_DISPLAY_MODE: 'change_display_mode',
  MARK_ALL_ITEMS: 'mark_all_items',
  EDIT_INPUT: 'edit_input',
  ON_INPUT_KEY_DOWN: 'on_input_key_down',
  LOCAL_STORAGE: 'LOCAL_STORAGE',
  UPDATE_INPUT_HANDLER: 'UPDATE_INPUT_HANDLER',
  OUTSIDE_CLICK: 'OUTSIDE_CLICK',
};

export const inputHandler = e => ({
  type: ACTION_TYPE.INPUT_HANDLER,
  e,
});

export const updateInputHandler = e => ({
  type: ACTION_TYPE.UPDATE_INPUT_HANDLER,
  e,
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

export const doubleClickOnInput = (edit, id, title) => ({
  type: ACTION_TYPE.EDIT_INPUT,
  edit,
  id,
  title,
});

export const onInputKeyDown = (e, id) => ({
  type: ACTION_TYPE.ON_INPUT_KEY_DOWN,
  e,
  id,
});

export const getLocalStorage = data => ({
  type: ACTION_TYPE.LOCAL_STORAGE,
  data,
});

export const outsideClick = id => ({
  type: ACTION_TYPE.OUTSIDE_CLICK,
  id,
});
