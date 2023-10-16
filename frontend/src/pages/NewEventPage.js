import { useLoaderData, json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
export default function () {
  // const data = useLoaderData();
  console.log("From new event page ");
  return <EventForm />;
}

export async function action({ request, params }) {
  console.log("new event action is working");
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log("new event action is working", eventData);
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  console.log("new event action is working1");
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    console.log("form error");
    throw json({ message: "Could not save new event" }, { status: 500 });
  }

  return redirect("/events");
}
