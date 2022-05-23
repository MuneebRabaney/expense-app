import { default as TextField } from "./TextField";
import { default as Button } from "./Button";
import { default as Heading } from "./Heading";
import { default as Form } from "./Form";
import { default as FieldGroup } from "./FieldGroup";
import { default as Select } from "./Select";
import { default as Container } from "./Container";

export declare namespace Component {
  type PForm = {
    Base: React.FC<props, state> | undefined;
    Group: React.FC<props, state> | undefined;
    Button: React.FC<props, state> | undefined;
    TextField: React.FC<props, state> | undefined;
    NumberField: React.FC<props, state> | undefined;
    SelectField: React.FC<props, state> | undefined;
    TextAreaField: React.FC<props, state> | undefined;
  };

  type SForm = {
    loading: boolean;
    errors: boolean;
  };

  interface IForm {
    (): React.FC<PForm, SForm> | void;
  }
}

export { Button, Heading, TextField, Form, Select, FieldGroup, Container };
