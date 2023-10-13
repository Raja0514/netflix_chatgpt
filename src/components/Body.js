import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userslice'

const Body = () => {

  const dispatch=useDispatch();

  


  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>

    },{
      path:"/browse",
      element:<Browse/>
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayname}= user;
        dispatch(addUser({uid:uid,email:email,dispalyname:displayname}));
        
        
      } else {
        // User is signed out
        dispatch(removeUser())
      
      }
    });
  },[])

  
  

  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
