function signup(userName){
    const users=['Jhon', 'Alice', 'Emma'];
    if(users.includes(userName)){
    return 'User Already Registered, Please Login';
    } else{
        users.push(userName);
            return 'sign sucessful,Please Login';
        }
    }
function login(userName, password){
    // Final update to login function
    const users =['Jhon', 'Alice', 'Emma'];
    if(!users.includes(userName)){
        return'User Not Found,Please Signup';
    }else if(password!=='Emp@123'){
     return'Wrong Password...';
    }else{
        return'Login Sucessful...';
    }
}