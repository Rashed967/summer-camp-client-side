import { Outlet } from "react-router-dom";
import MySelectedClass from "./MySelectedClass";


const StudentDashBoard = () => {
    return (
        <div>
            <h1>Student DashBoard</h1>
            <Outlet></Outlet>

        </div>
    );
};

export default StudentDashBoard;