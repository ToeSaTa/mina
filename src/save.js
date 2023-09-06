/* eslint-disable prettier/prettier */
const Users = [];
export const Hours = [];

export function saveUser(id, name , username, pass, email) {
    const user = {
        id: id,
        name: name,
        user: username,
        pass: pass,
        email:email,
    };
    Users.push(user);
}

export function searchUser(usuario, pass){
    const User = Users.find(user => user.user === usuario && user.pass === pass);
    if (User) {
        return true;
    } else {
        return false;
    }
}

export function saveHour(date, time,time2,hour) {
    const register = {
        date:date,
        hStart:time,
        hEnd:time2,
        total: hour,
    };
    Hours.push(register);
}
