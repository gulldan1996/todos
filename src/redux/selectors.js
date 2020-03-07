import { createSelector } from 'reselect';

const rootSelector = state => state;

export const itemsLeft = createSelector(
  rootSelector,
  ({ items }) => (
    items.filter(i => !i.completed)
  ),
);

export const displaySelect = createSelector(
  rootSelector,
  ({ display }) => display,
);

export const todosItemsSelect = createSelector(
  rootSelector,
  ({ items }) => items,
);

export const idSelect = createSelector(
  rootSelector,
  ({ id }) => id,
);

export const inputValueSelect = createSelector(
  rootSelector,
  ({ input }) => input,
);

export const currentValueSelect = createSelector(
  rootSelector,
  ({ currentValue }) => currentValue,
);

export const filtered = createSelector(
  rootSelector,
  ({ items, display }) => {
    let filteredItem;

    if (display === 'all') {
      filteredItem = items;
    }

    if (display === 'completed') {
      filteredItem = items.filter(i => i.completed);
    }

    if (display === 'active') {
      filteredItem = items.filter(i => !i.completed);
    }

    return filteredItem;
  },
);
