export type FieldGroupProps = {
  className?: string | undefined;
  children?: React.ReactNode | undefined;
  disable?: [] | string | undefined;
};

export default interface IFieldGroup {
  props: FieldGroupProps;
  return: React.FC | void;
}

export function FieldGroup() {
  return <fieldset className={props?.className}>{props?.children}</fieldset>;
}

export default FieldGroup;
