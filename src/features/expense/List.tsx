import { useCallback, useMemo } from "react";
import { Heading, Form } from "src/components";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import { listExpenses, default as create } from "./";

export function getExpenseList(expense = T[{ string, object }]): [React.FC] | void {
  return expense?.all.map((e, k) => (
    <div key={k.toString()} className='bg-gray-300 p-5 mb-5 flex items-center justify-between'>
      <div>
        <header>
          <h3 className='font-bold text-lg text-grey-700'>Name: {e?.name}</h3>
          <h4 className='font-bold text-md text-grey-700'>Category: {expense.categories[e?.cId]?.name}</h4>
        </header>
        <p className='font-normal text-grey-600'>Amount: {e?.amount}</p>
        <p className='font-normal text-grey-600'>
          Date Create: <strong>{e?.createdAt}</strong>
        </p>
        <p className='font-normal text-grey-600'>
          Date Updated: <strong>{e?.updatedAt}</strong>
        </p>
      </div>
    </div>
  ));
}

export function List() {
  const expense = useAppSelector(listExpenses);
  const dispatch = useAppDispatch();

  const ExpenseList = useMemo(() => getExpenseList(expense), [expense]);

  useCallback(() => {
    if (!!expense?.all) {
      return dispatch(create(expense));
    }

    return () => dispatch(create(expense));
  }, [expense, dispatch]);
  return (
    <div className='grid grid-cols-2 gap-2 mt-10'>
      <div>
        <Heading title='Create New Expense' />
        <Form />
      </div>
      <div>
        {!expense?.all && <Heading title='No Expenses Logged' />}
        {!!expense?.all && <Heading title='Expense List' />}
        {!!expense?.all && ExpenseList}
      </div>
    </div>
  );
}

export default List;
