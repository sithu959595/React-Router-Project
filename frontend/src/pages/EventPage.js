import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router";
function EventsPage() {
  console.log("render eventpage");
  const data = useLoaderData();
  const eventsData = data.events;
  return (
    <>
      <EventsList events={eventsData} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  console.log("loading from eventPage");
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "error iss happening" }), {
    //   status: 500,
    // });
    throw json({ message: "errorrrr!" }, { status: 500 });
  } else {
    // const resData = await response.json();

    return response;
  }
}
