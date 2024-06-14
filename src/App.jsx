// import HomePage from "./HomePage";
// import LoginPage from "./LoginPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Landing from "./Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <RegisterPage /> */}
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
