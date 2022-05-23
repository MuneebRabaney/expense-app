export type ButtonProps = {
  type?: string | "button";
  onClick?: IButton;
  children?: React.ReactNode;
};

export interface IButton {
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      type={props?.type}
      onClick={props?.onClick}
      className='bg-indigo-500 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700'>
      {props?.children}
    </button>
  );
}

export default Button;
