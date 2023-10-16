import {
  useParams,
  json,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import { func } from "prop-types";
export default function () {
  const params = useParams();
  const data = useRouteLoaderData("event-detail");
  console.log("From detail ", data);
  return (
    <>
      <h1>Event Detail Page for {params.eventId}</h1>
      <EventItem event={data.event} />
    </>
  );
}
export async function loader({ request, params }) {
  console.log("hi");
  const id = params.eventId;
  console.log("id is ", id);
  const resp = await fetch("http://localhost:8080/events/" + id);
  if (!resp.ok) {
    throw json(
      {
        message: "Could not fetch the details for the selected event",
      },
      { status: 500 }
    );
  } else {
    console.log("ok");
    return resp;
  }
}

export async function action({ params, request }) {
  console.log("deaitl action is working");
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "cannot delete the event" }, { status: 500 });
  }
  return redirect("/events");
}
