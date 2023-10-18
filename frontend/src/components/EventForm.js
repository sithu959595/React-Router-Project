import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const actionData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  // if(navigation.state==="submitting"){}
  const isSubmitting = navigation.state === "submitting";
  console.log("renderring event form", navigation.state);
  function cancelHandler() {
    // navigate("..");
  }
  if (!event) {
    event = {
      title: "",
      image: "",
      date: "",
      description: "",
    };
  }

  return (
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && (
        <ul>
          {Object.values(actionData.errors).map((each) => (
            <li>{each}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event.title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event.image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event.date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
        <span>{navigation.state}</span>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  console.log("new event action is working");
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "";
  if (request.method === "POST") {
    url = "http://localhost:8080/events";
  } else if (request.method === "PATCH") {
    url = "http://localhost:8080/events/" + params.eventId;
  }
  console.log("new event action is working", eventData);
  const response = await fetch(url, {
    method: request.method,
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
