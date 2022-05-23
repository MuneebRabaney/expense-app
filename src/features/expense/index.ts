import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { default as List } from "./List";
import { default as syncExpense } from "./";

export { List };

export const printDate = new Date()
  .toLocaleDateString("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    separator: ".",
  })
  .replaceAll("/", "-");
export const categories: ExpenseCategory = [
  {
    id: 1,
    name: "Entertainment",
  },
  {
    id: 2,
    name: "Transportation",
  },
  {
    id: 3,
    name: "Savings",
  },
  {
    id: 4,
    name: "Groceries",
  },
  {
    id: 5,
    name: "Food",
  },
  {
    id: 6,
    name: "Utilities",
  },
];

export const expenses: object[] = [
  {
    id: 1,
    cId: 1,
    amount: 1,
    name: "Movies",
    createdAt: printDate,
    updatedAt: printDate,
  },
  {
    id: 2,
    cId: 2,
    amount: 1,
    name: "Petrol",
    createdAt: printDate,
    updatedAt: printDate,
  },
  {
    id: 2,
    cId: 1,
    amount: 1,
    name: "Pizza",
    date: printDate,
    createdAt: printDate,
    updatedAt: printDate,
  },
  {
    id: 3,
    cId: 4,
    amount: 1,
    name: "Monthly Shopping",
    date: printDate,
    createdAt: printDate,
    updatedAt: printDate,
  },
];

export type ExpenseProps = {
  id: number;
  name: string;
  amount: number;
  createdAt: Date;
  createdAt: Date;
  cid: ExpenseCategory<id>;
};

export type ExpenseState = {
  status: string;
  all?: [] | undefined;
  diff?: [] | undefined;
};

export interface IExpense {
  create?: AppDispatch;
  read?: AppDispatch;
  upsert?: AppDispatch;
  remove?: AppDispatch;
  persist?: AppDispatch;
  props?: ExpenseProps;
  state?: ExpenseState;
  amount: ExpenseProps | 1;
  updatedAt: ExpenseProps.updatedAt;
  createdAt: ExpenseProps.createdAt;
  initialState: ExpenseState;
  categories: ExpenseCategory;
  status: ExpenseState<"idle" | "loading" | "failed">;
}

const initialState: ExpensesState = {
  id: 0,
  diff: [],
  status: "idle",
  pid: undefined,
  all: expenses,
  createdAt: printDate,
  updatedAt: printDate,
  categories,
};

export const handleAsyncDataDiff = createAsyncThunk("expense/syncExpense", async (updatedAt) => {
  const response = await syncExpense(updatedAt);
  // The value we return becomes the `fulfilled` action payload
  // console.log(response);
  return response.data;
});

export const DataModel: IExpense = createSlice({
  name: "expense",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    read(id: number) {
      // console.log(action.payload);
    },
    sync(state, action) {
      console.log("action", action);
      // console.log("payload", action.payload);
    },
    create(state, action: PayloadAction<{ Date }>) {
      console.log(state, action);
    },
    persist(tempData: PayloadAction<{ T }>) {
      // console.log(tempData);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    upsert(state, action: PayloadAction<{ T }>) {
      // console.log(action.payload);
    },
    remove(state, action: PayloadAction<{ T }>) {
      // console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    // console.log(handleAsyncDataDiff.fulfilled);
    builder
      .addCase(handleAsyncDataDiff.pending, (state) => {
        console.log(state, action);
        state.status = "loading";
      })
      .addCase(handleAsyncDataDiff.fulfilled, (state, action) => {
        console.log(state, action);
        state.status = "idle";
        state.diff = action.payload;
      })
      .addCase(handleAsyncDataDiff.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const listExpenses = (state: RootState) => state.expense;
export const { sync, read, upsert, remove } = DataModel.actions;

export const syncDataModel =
  (updatedAt: Date): AppThunk =>
  (dispatch, getState) => {
    const getExpenses = listExpenses(getState());
    // if (updatedAt !== printDate) {
    // console.log("ehyyyyyy we can sync!", getExpenses);
    dispatch(sync(getExpenses));
  };

export default DataModel;
