import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
export default function () {
  // const data = useLoaderData();
  console.log("From new event page ");
  return <EventForm method="POST" />;
}
