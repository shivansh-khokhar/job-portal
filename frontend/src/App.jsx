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
import Companies from "./components/admin/Companies.jsx"
import CompanyCreate from "./components/admin/CompanyCreate"
import AdminJobs from "./components/admin/AdminJobs"
import PostJobs from "./components/admin/PostJob"
import ProtectedRoute from "./components/admin/ProtectedRoute"
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

  //admin
  {
    path:"admin/companies",
    element:<ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"admin/companies/create",
    element:<ProtectedRoute><CompanyCreate/></ProtectedRoute>
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute>
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute>
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJobs/></ProtectedRoute>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute>
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
