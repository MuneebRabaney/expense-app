import React, { useRef } from "react";
import { default as Form } from "src/components";

export function Create() {
  const formRef = useRef();
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Form ref={formRef} name="create">
        {props?.children}
      </Form>
    </div>
  );
}

export default Create;
