// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage, { loader as eventsLoader } from "./pages/EventPage";
import EditEventPage, {
  action as editEventAction,
} from "./pages/EditEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import Root from "./pages/Root";
import RootForEvents from "./pages/RootForEvents";
import { element } from "prop-types";
import Error from "./pages/Error";
import TestHome, { action as testAction } from "./pages/TestHome";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <RootForEvents />,
          children: [
            {
              index: true,
              element: <EventPage />,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              loader: eventDetailLoader,
              id: "event-detail",
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: eventDetailAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: editEventAction,
                },
              ],
            },

            {
              path: "new",
              element: <NewEventPage />,
              action: newEventAction,
            },
          ],
        },
      ],
    },
    {
      path: "/test",
      element: <TestHome />,
      action: testAction,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
