import { createSelector } from 'reselect';

const rootSelector = state => state;

export const itemsLeft = createSelector(
  rootSelector,
  ({ items }) => (
    items.filter(i => !i.completed)
  ),
);
