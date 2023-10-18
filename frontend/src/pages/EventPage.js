import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router";
import { Suspense } from "react";
import TestForm from "./TestForm";
function EventsPage() {
  const data = useLoaderData();

  const { events } = data; //events is promise
  console.log("render eventpage ", events);
  return (
    <>
      <TestForm />
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...!</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;
async function loadingEvents() {
  console.log("loading from eventPage");
  const response = await fetch("http://localhost:8080/events");
  console.log("11");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "error iss happening" }), {
    //   status: 500,
    // });
    throw json({ message: "errorrrr!" }, { status: 500 });
  } else {
    // const resData = await response.json();
    console.log("22");
    const data = await response.json();
    console.log("impportant", data);
    return data.events;
  }
}
export function loader() {
  return defer({ events: loadingEvents() }); //events is promise
}
