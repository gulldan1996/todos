import { ACTION_TYPE } from './actions';

const initialState = {
  input: '',
  nextId: 1,
  items: [],
  display: 'all',
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_INPUT: {
      return {
        ...state,
        input: action.inputValue,
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

    default:
      return state;
  }
}
