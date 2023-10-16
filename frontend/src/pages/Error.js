import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";
export default function () {
  const err = useRouteError();
  // console.log(JSON.parse(err.data).message);
  let title = "error occured!";
  let message = "something went wrong";
  if (err.status === 500) {
    message = err.data.message;
  }

  if (err.status === 404) {
    title = "Not Found!";
    message = "Could not find resource";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
