import { Form } from "@components";

export default function Create() {
  const formRef = useRef();
  return (
    <div className='grid gap-5 md:grid-cols-2'>
      <Form ref={formRef} name='create'>
        {props?.children}
      </Form>
    </div>
  );
}
