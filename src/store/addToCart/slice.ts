import { createAction, createReducer } from "@reduxjs/toolkit";

const increment: any = createAction("INCREMENT");

const initialState = {
  count: 0,
};

const reducer = createReducer(initialState, {
  [increment]: function (state) {
    state.count = state.count + 1;
  },
});

export default reducer;
