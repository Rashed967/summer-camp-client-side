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
import AddAClass from "../pages/InstructorDashboard/AddAClass";
import MyClassInstructor from "../pages/InstructorDashboard/MyClassInstructor";
import ManageClasses from "../pages/AdminDsashboard/manageClasses";
import ManageUsers from "../pages/AdminDsashboard/ManageUsers";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/StudentDashBoard/Payment";
import PrivateRoute from "./PrivetRoute";



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
        element : <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children : [
         
            {
                path : "mySelectedClasses",
                element : <MySelectedClass></MySelectedClass> 
            },
            {
                path : "enrolledClass",
                element : <MyEnrolledClass></MyEnrolledClass>
            },
            {
                path : "payment",
                element : <Payment></Payment>
            },
            {
                path : "addAClass",
                element : <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path : "myClassInstructor",
                element : <InstructorRoute><MyClassInstructor></MyClassInstructor></InstructorRoute>
            },
            {
                path : "manageClasses",
                element : <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path : "manageUsers",
                element : <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    },
    {
        path : "*",
        element : <ErrorPage></ErrorPage>
    }
  ]);


  export default router