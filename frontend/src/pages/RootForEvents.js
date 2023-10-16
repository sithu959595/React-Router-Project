import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventsNavigation";
export default function () {
  return (
    <>
      <EventNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
