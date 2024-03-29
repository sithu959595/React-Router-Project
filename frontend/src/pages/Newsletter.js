import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "../components/PageContent";
// import { useLoaderData } from "react-router-dom";
function NewsletterPage() {
  // const data = useLoaderData();
  console.log("newsletterpage");
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
