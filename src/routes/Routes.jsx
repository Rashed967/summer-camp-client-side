import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>,   
        },
        {
            path : "login",
            element : <Login></Login>
        },
        {
            path : "register",
            element : <Register></Register>
        },
        {
            path : "instructors",
            element : <Instructors></Instructors>
        }
      ]
    },
  ]);


  export default router