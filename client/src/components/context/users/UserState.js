import React, { useState } from "react";
import userContext from "./userContext";

const UserState=(props)=>{

  const host="http://localhost:5000"

    
  const [user,setUser]=useState({});
  
  async function fetchUser(){

      //API CALL
      const response = await fetch(`${host}/api/auth/getuser`,
      {
        method: "GET",
        headers: {
          "auth-token":localStorage.getItem('token')
          }
      });
      const json=await response.json()
      // console.log(json);
      setUser(json)  
      // console.log(user) 
    }

    return(
        <userContext.Provider value={{user,setUser,fetchUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;

