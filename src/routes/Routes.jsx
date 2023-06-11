import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import ApprovedClasses from "../pages/ApprovedClasses/ApprovedClasses";
import DashBoard from "../layout/DashBoard";
import StudentDashBoard from "../pages/StudentDashBoard/StudentDashBoard";
import MySelectedClass from "../pages/StudentDashBoard/MySelectedClass";
import MyEnrolledClass from "../pages/StudentDashBoard/MyEnrolledClass";



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
        },
        {
            path : "approvedClasses",
            element : <ApprovedClasses></ApprovedClasses>
        }
      ]
    },
    {
        path : "dashboard",
        element : <DashBoard></DashBoard>,
        children : [
            {
                path : "studentDashboard",
                element : <StudentDashBoard></StudentDashBoard>,   
            },
            {
                path : "mySelectedClasses",
                element : <MySelectedClass></MySelectedClass> 
            },
            {
                path : "enrolledClass",
                element : <MyEnrolledClass></MyEnrolledClass>
            }
        ]
    }
  ]);


  export default router