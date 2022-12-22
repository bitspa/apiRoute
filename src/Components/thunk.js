import { postUser,loginUser } from "./Actions";
import axios from "axios";

let user
export function postUserRequest(param) {

  // console.log(param);

  return async function (dispatch) {
    await axios
      .post("https://reqres.in/api/register", param)
      .then((res) => {
        user=res.data;
        dispatch(postUser(res))
        console.log("Post Successfull");
      }).catch((e)=>{
        console.log(e.message);
      })
      return user;
  };
}
export function loginUserRequest(param) {
  return async function (dispatch) {
    
    await axios.post("https://reqres.in/api/login", param).then((res)=>{
      user = res.data
      console.log(res)
      dispatch(loginUser(res))
    });
    return user
  };
}