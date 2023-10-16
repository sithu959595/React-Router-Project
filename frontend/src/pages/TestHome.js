import React from "react";
import TestForm from "./TestForm";
export default function () {
  console.log("render TestHom");
  return (
    <>
      <div>Testing from Home</div>
      <TestForm />
    </>
  );
}

export async function action({ params, request }) {
  console.log("TEST ACTION");
  const data = await request.formData();

  const response = await fetch("http://localhost:8080/events");
  return null;
}
