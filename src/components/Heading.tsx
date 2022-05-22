export type HeadingProps = {
  title: string;
  children?: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  return (
    <header>
      <h1 className="text-center font-bold text-2xl text-gray-700">
        {props?.title}
      </h1>
      {props?.children}
    </header>
  );
}

export default Heading;
