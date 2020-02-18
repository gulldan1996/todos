import { ACTION_TYPE } from './actions';

const initialState = {
  input: '',
  nextId: 1,
  items: [],
  display: 'all',
  markAll: true,
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_INPUT: {
      return {
        ...state,
        input: action.inputValue,
      };
    }

    case ACTION_TYPE.UPDATE_INPUT_EDIT: {
      return {
        ...state,
        currentValue: action.value,
      };
    }

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

    case ACTION_TYPE.REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemId),
      };
    }

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

    case ACTION_TYPE.REMOVE_COMPETED: {
      return {
        ...state,
        items: state.items.filter(item => !item.completed),
      };
    }

    case ACTION_TYPE.CHANGE_DISPLAY_MODE: {
      return {
        ...state,
        display: action.displayMode,
      };
    }

    case ACTION_TYPE.MARK_ALL_ITEMS: {
      return {
        ...state,
        markAll: !state.markAll,
        items: [...state.items].map((item) => {
          return {
            id: item.id,
            title: item.title,
            completed: state.markAll,
          };
        }),
      };
    }

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

    case ACTION_TYPE.ON_INPUT_KEY_DOWN: {
      // if (action.key.keyCode === 27 || !state.currentValue) {
      //   return {
      //     items: state.items.map((item) => {
      //       if (item.id !== action.id) {
      //         return item;
      //       }

      //       return {
      //         ...item,
      //         isEditing: false,
      //         title: state.currentValue,
      //       };
      //     }),
      //   };
      // }

      if (action.e === 'Enter' && state.currentValue.trim() !== '') {
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: state.nextId,
              title: state.currentValue,
              completed: false,
              isEditing: false,
            },
          ],
          nextId: state.nextId + 1,
          currentValue: '',
        };
      }

      return state;
    }

    default:
      return state;
  }
}
