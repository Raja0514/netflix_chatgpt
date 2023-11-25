import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkvalidate } from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BACKGROUND_IMG_URL } from "../utils/constant";

import { auth } from "../utils/Firebase";


const Login = () => {
  const [issignform, setissignform] = useState(true);

  const [errormessage, seterrormessage] = useState(null);

  

  const email = useRef(null);

  const password = useRef(null);

  //const phone=useRef(null);

  const handleButtonClick = () => {
    //validate the form data

    // console.log(email.current.value);

    // console.log(password.current.value);

    //console.log(phone.current.value);

    const message = checkvalidate(email.current.value, password.current.value);
    //console.log(message);
    seterrormessage(message);
    if (message) return;

    if (!issignform) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
          //console.log(user);
          email.current.value = "";
          password.current.value = "";

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setissignform(!issignform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:w-screen"
          src={BACKGROUND_IMG_URL}
          alt="log"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black absolute w-full md:w-3/12 p-12 my-32 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-70"
      >
        <h1 className="font-bold text-lg md:text-3xl py-4 text-center">
          {issignform ? "Sign In" : "Sign Up"}
        </h1>
        {!issignform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-slate-700"
          />
        )}
        {!issignform && (
          <input
            //ref={phone}
            type="number"
            placeholder="Phone Number"
            className="p-2 m-2 w-full bg-slate-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-slate-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-slate-700"
        />
        <p className="text-red-700 font-bold py-4 text-lg">{errormessage}</p>
        <button
          className="p-2 m-2 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {issignform ? "Sign In " : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {issignform
            ? "New to Netflix Sign up Now"
            : "Already Registerd Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
