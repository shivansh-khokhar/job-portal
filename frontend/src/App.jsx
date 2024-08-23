import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Login from './components/auth/Login'
import Home from "./components/Home"
import Signup from './components/auth/Signup'
import Jobs from "./components/Jobs"
import Browse from "./components/Browse"
import Profile from "./components/Profile"
import JobDescription from "./components/JobDescription"
import Applicants from "./components/admin/Applicants"
import CompanySetup from "./components/admin/CompanySetup"
import Companies from "./components/admin/Companies"
import CompanyCreate from "./components/admin/CompanyCreate"
import AdminJobs from "./components/admin/AdminJobs"
import PostJobs from "./components/admin/PostJobs"
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
  {
    path:"admin/companies",
    element:<Companies/>
  },
  {
    path:"admin/companies/create",
    element:<CompanyCreate/>
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  },
  {
    path:"/admin/jobs/create",
    element:<PostJobs/>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants/>
  }

])
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
