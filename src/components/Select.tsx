import React from "react";

type SelectProps = {
  elements: [];
};

export function Select(props: SelectProps) {
  return (
    <>
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option defaultValue={0}>{props?.placeholder}</option>
        {props?.elements.map((n, k) => (
          <option key={`${k}-${n.id}-${n.name}`}>{n?.name}</option>
        ))}
      </select>
    </>
  );
}

export default Select;
