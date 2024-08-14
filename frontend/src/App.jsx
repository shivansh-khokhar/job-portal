<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";

=======
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Login from './components/auth/Login'
import Home from "./components/Home"
import Signup from './components/auth/Signup'
import Jobs from "./components/Jobs"
import Browse from "./components/Browse"
import Profile from "./components/Profile"
import JobDescription from "./components/JobDescription"
>>>>>>> 151f8df262e56102da5615aa5db3546214ccef30
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
<<<<<<< HEAD
]);
=======

  //admin ke liye yhase start hoga
  {
    path:"/admin/companies",
    element:<companies/>
  }

])
>>>>>>> 151f8df262e56102da5615aa5db3546214ccef30
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
