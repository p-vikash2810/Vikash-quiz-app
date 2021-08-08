import { createSelector } from "reselect";

const selectValue = (state) => state.homepage;

export const selectHomeValues = createSelector(
  [selectValue],
  (homegage) => homegage.homeValues
);
