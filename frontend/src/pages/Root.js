import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function () {
  // const navi = useNavigation();
  // console.log("navi ", navi.state);
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navi.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
