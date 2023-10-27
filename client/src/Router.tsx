import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Homepahe from "./components/homepage/Homepage";
import Categories from "./components/categories/Categories";
import AddTask from "./components/task/AddTask";
import Dashboard from "./components/dashboard/Dashboard";
import EditTask from "./components/edit_screens/EditTask";
import EditCategory from "./components/edit_screens/EditCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepahe />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/categories/add",
    element: <Categories />,
  },
  {
    path: "/categories/edit/:id",
    element: <EditCategory />,
  },
  {
    path: "/task/add",
    element: <AddTask />,
  },
  {
    path: "/task/edit/:id",
    element: <EditTask />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
