import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { default as DataModel } from "src/feature";

export const store = configureStore({
  reducer: {
    expense: DataModel,
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
