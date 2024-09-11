import AccountPage from "../page/Account";
import HomePage from "../page/Home";
import Loading from "../page/LoadingPage";

const routes = [
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
];
export default routes;
