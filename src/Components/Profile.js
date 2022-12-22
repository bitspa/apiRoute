import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

export default function Profile() {

    let user=useSelector((state)=>state.authReducer.user.userData);

    user = JSON.parse(user);

    const navigate = useNavigate();
    return(
        <>
        <h1>Welcome {user.Username} </h1>
        <button id="reg_btn" onClick={() =>{
          navigate("/")
        }
    }>Logout</button>
        </>
    )
    }

    
