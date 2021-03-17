import React from 'react';
import Home from "../pages/Home";
import Account from "../pages/Account";
import Students from "../pages/Students";
import Assignments from "../pages/Assignments";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Logout from "../pages/Logout";
import {Route} from 'react-router-dom';
import MyQuizzes from "../pages/MyQuizzes";
import UploadQuiz from "../pages/UploadQuiz";
import Archive from "../pages/Archive";

function TeacherSidebarButtons(props) {
    return (
        <div>
            <Route exact path="/" ><Home/></Route>
            <Route  path="/account" ><Account/></Route>
            <Route  path="/students" ><Students/></Route>
            <Route path="/quizzes" ><MyQuizzes/></Route>;
            <Route  path="/assignments" ><Assignments/></Route>
            <Route path="/uploadQuiz" ><UploadQuiz/></Route>;
            <Route  path="/dashboard" ><Dashboard/></Route>
            <Route  path="/archive" ><Archive/></Route>
            <Route  path="/settings" ><Settings/></Route>
            <Route  path="/logout" ><Logout /></Route>
        </div>
    );
}

export default TeacherSidebarButtons;