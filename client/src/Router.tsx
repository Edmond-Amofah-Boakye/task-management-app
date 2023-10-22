import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Homepahe from './components/homepage/Homepage'
import Categories from './components/categories/Categories'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepahe />
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
      path: "/signin",
      element: <Signin />
  },
  {
    path: "/categories",
    element: <Categories/>
},
])
const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router