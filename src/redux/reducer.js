import { ACTION_TYPE } from './actions';

const initialState = {
  input: '',
  nextId: 1,
  items: [],
  display: 'all',
  markAll: true,
  currentValue: '',
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    // Input handler on added
    case ACTION_TYPE.INPUT_HANDLER: {
      const { value } = action.e.target;

      action.e.persist();

      return {
        ...state,
        input: value,
      };
    }

    // Input handler on update
    case ACTION_TYPE.UPDATE_INPUT_HANDLER: {
      const { value } = action.e.target;

      action.e.persist();

      return {
        ...state,
        currentValue: value,
      };
    }

    // Add new todos
    case ACTION_TYPE.ADD_ITEM: {
      if (action.e === 'Enter' && state.input.trim() !== '') {
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: state.nextId,
              title: state.input,
              completed: false,
              isEditing: false,
            },
          ],
          nextId: state.nextId + 1,
          input: '',
        };
      }

      return state;
    }

    // Remove todos item
    case ACTION_TYPE.REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemId),
      };
    }

    // Check item todos is active or completed
    case ACTION_TYPE.TOGGLE_ITEM: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.itemId) {
            return item;
          }

          return {
            ...item,
            completed: !item.completed,
          };
        }),
      };
    }

    // Remove all completed todos
    case ACTION_TYPE.REMOVE_COMPETED: {
      return {
        ...state,
        items: state.items.filter(item => !item.completed),
      };
    }

    // Change display mode all, active or completed
    case ACTION_TYPE.CHANGE_DISPLAY_MODE: {
      return {
        ...state,
        display: action.displayMode,
      };
    }

    // Mark all todos
    case ACTION_TYPE.MARK_ALL_ITEMS: {
      return {
        ...state,
        markAll: !state.markAll,
        items: [...state.items].map(item => ({
          id: item.id,
          title: item.title,
          completed: state.markAll,
        })),
      };
    }

    // Get request on local storage
    case ACTION_TYPE.LOCAL_STORAGE: {
      return {
        ...state,
        items: JSON.parse(action.data),
      };
    }

    // Double click on input and after we can to update this input
    case ACTION_TYPE.EDIT_INPUT: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.id) {
            return item;
          }

          return {
            ...item,
            isEditing: !action.isEditing,
          };
        }),
        currentValue: action.title,
      };
    }

    // Key down Escape and Enter on update input
    case ACTION_TYPE.ON_INPUT_KEY_DOWN: {
      action.e.persist();

      const { e, id } = action;

      if (e.keyCode === 27) {
        return {
          ...state,
          items: state.items.map(item => ({
            ...item,
            isEditing: false,
          })),
        };
      }

      if (e.key === 'Enter' && state.currentValue.trim() !== '') {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id !== id) {
              return item;
            }

            return {
              ...item,
              title: state.currentValue,
              isEditing: false,
            };
          }),
          currentValue: '',
        };
      }

      return state;
    }

    // Outside click to close this open input
    case ACTION_TYPE.OUTSIDE_CLICK: {
      const { id } = action;

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== id) {
            return item;
          }

          return {
            ...item,
            isEditing: false,
          };
        }),
      };
    }

    default:
      return state;
  }
}
