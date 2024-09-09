 import HomePage from "../page/Home"
import Loading from "../page/LoadingPage"

const routes = [
  {
    path: "*",
    element: <HomePage />,
  },  {
    path: "/loading",
    element: <Loading />,
  },
]
export default routes
