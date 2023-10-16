import { Form } from "react-router-dom";
export default function () {
  console.log("render TestForm");
  return (
    <Form method="POST">
      <button>submit</button>
    </Form>
  );
}
