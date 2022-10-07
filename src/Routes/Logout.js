import { useNavigate } from "react-router-dom"
import React from 'react'
import 'react-notifications/lib/notifications.css'
import { NotificationManager } from 'react-notifications'
import { useEffect } from "react"


const Logout = () => {
  const navigation = useNavigate();
  useEffect( ()=>{

  const token =  localStorage.getItem("token");
      if(token!==null)
     { NotificationManager.warning("Logged Out Successfully..... ", "",3000);
      localStorage.removeItem("token");
      navigation("/Login")}
      else {
        navigation("/Login")
      }
},[])
 
  return (
    <div>Logout</div>
  )
}

export default Logout