// A mock function to mimic making an async request for data
export function syncExpense(apiData) {
  return new Promise<{ data: apiData }>((resolve) => {
    return setTimeout(() => {
      console.assert("data", data);
      return resolve({ data });
    }, 500);
  });
}
