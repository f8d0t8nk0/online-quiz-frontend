import store from "./store";

let loginDTO = store.getState().api.login.loginDTO;
let roleId;
if (loginDTO !== undefined) {
    roleId = loginDTO.roleId;
}

// if student, roleId = 3, quiz is not shown
export const canShowQuizLink = (roleId === 2 || roleId === 1);
export const isStudent = roleId ===3;
export const isTeacher = roleId ===2;
export const isAdmin = roleId ===1;