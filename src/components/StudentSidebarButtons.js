import React from 'react';
import Home from "../pages/Home";
import Account from "../pages/Account";
import Students from "../pages/Students";
import MyQuizzes from "../pages/MyQuizzes";
import Assignments from "../pages/Assignments";
import UploadQuiz from "../pages/UploadQuiz";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Logout from "../pages/Logout";
import {Route} from 'react-router-dom';

function StudentSidebarButtons(props) {
    return (
        <div>
            <div>
                <Route exact path="/" ><Home/></Route>
                <Route  path="/account" ><Account/></Route>
                <Route  path="/assignments" ><Assignments/></Route>
                <Route  path="/dashboard" ><Dashboard/></Route>
                <Route  path="/settings" ><Settings/></Route>
                <Route  path="/logout" ><Logout /></Route>
            </div>
        </div>
    );
}

export default StudentSidebarButtons;