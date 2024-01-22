import { Form, useLoaderData } from "react-router-dom";
export default function () {
  const testData = useLoaderData();
  // const { events } = testData;
  console.log("render TestForm ");
  return (
    <Form method="POST">
      <button>submit</button>
    </Form>
    // <p>Test</p>
  );
}
