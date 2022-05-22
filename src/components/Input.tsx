export type InputProps = {
  error: false;
  name: string;
  type: "text" | "nunber";
  id?: string | undefined;
  value?: string | undefined;
  placeholder?: string | undefined;
  children?: React.ReactNode | undefined;
  onError: IInput.onError | undefined;
  onChange?: IInput.onChange | undefined;
};

export interface IInput {
  onError: () => boolean;
  onChange: (value: string) => void;
}

export function Input(props: InputProps) {
  return (
    <>
      <input
        type="text"
        id={props?.id}
        onError={props.onError}
        required={props.required}
        onChange={() => props.onChange}
        placeholder={props.placeholder}
        name={`floating_${props?.name}`}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor={`floating_${props?.name}`}
        className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {props?.children}
      </label>
    </>
  );
}

export default Input;
