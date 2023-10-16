import EventForm from "../components/EventForm";
import { json, useRouteLoaderData } from "react-router-dom";
export default function () {
  const data = useRouteLoaderData("event-detail");
  console.log("edit ", data);
  return <EventForm event={data.event} />;
}
export async function action({ request, params }) {
  console.log("edit event action is working........");
}
