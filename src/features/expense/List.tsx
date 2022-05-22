import { useCallback } from "react";
// import { Input, Button, Select, Form, Heading } from "src/components";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import { listExpenses, default as create } from "./";

export function refreshExpenseList(expense) {
  if (expense?.all.length > 0) {
    return (
      <>
        {expense.all.map((e, k) => (
          <div
            key={k.toString()}
            className='bg-gray-300 p-5 flex items-center justify-between'>
            <div>
              <header>
                <h3 className='font-bold text-lg text-grey-700'>
                  Name: {e?.name}
                </h3>
                <h4 className='font-bold text-md text-grey-700'>
                  Category: {expense.categories[e?.cId]?.name}
                </h4>
              </header>
              <p className='font-normal text-grey-600'>Amount: {e?.amount}</p>
              <p className='font-normal text-grey-600'>
                Date Create: <strong>{e?.createdAt}</strong>
              </p>
              <p className='font-normal text-grey-600'>
                Date Updated: <strong>{e?.updatedAt}</strong>
              </p>
            </div>
            <div className='flex gap-4'>
              <button type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                  />
                </svg>
                {""}
              </button>
              <button type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
                {""}
              </button>
            </div>
          </div>
        ))}
      </>
    );
  }
  // If we have nothing in store
  return (
    <p className='text-center col-span-2 text-grey-700 font-semibold'>
      No Expenses Logged
    </p>
  );
}

export function List() {
  const expense = useAppSelector(listExpenses);
  const dispatch = useAppDispatch();

  useCallback(() => {
    if (expense?.all?.length > 0) {
      return dispatch(create(expense));
    }

    return () => dispatch(create(expense));
  }, [expense, dispatch]);
  console.log(expense);
  return (
    <>
      <div className='grid grid-cols-2 gap-2'>
        <div>gest</div>
        <div>{expense && refreshExpenseList(expense)}</div>
      </div>
    </>
  );
}

export default List;
