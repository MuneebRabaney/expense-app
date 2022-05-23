import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { default as Expense } from "src/features";

export const store = configureStore({
  reducer: {
    ...Expense,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
