import { createSelector } from "reselect"

const itemsSelector = (state) => state.items;
export const getItems = createSelector(
    [itemsSelector],state=>state.list
);