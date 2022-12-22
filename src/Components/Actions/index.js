export const postUser = (user) => {
    return {
        type : "POST_USER",
        user:{...user.data,userData:user.config.data}
    }
}
export const loginUser = (user) => {
    // console.log(2, user);
    return {
        type : "LOGIN_USER",
        user:{...user.data, userData:user.config.data}
    }
}
