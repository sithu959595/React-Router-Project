import React from "react";
import TestForm from "./TestForm";
import Test2 from "./Test2";
export default function () {
  console.log("render TestHom");
  return (
    <>
      <div>Testing from Home</div>
      <TestForm />
      <Test2 />
    </>
  );
}

export async function action({ params, request }) {
  console.log("TEST ACTION");
  const data = await request.formData();

  // const response = await fetch("http://localhost:8080/events");
  return null;
}
