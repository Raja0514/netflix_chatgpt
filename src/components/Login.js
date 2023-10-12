import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkvalidate } from "../utils/Validate";

const Login = () => {

  const [issignform, setissignform] = useState(true);

  const [errormessage,seterrormessage]=useState(null);


  const email = useRef(null);

  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    

    console.log(email.current.value);

    console.log(password.current.value);

    const message=checkvalidate(email.current.value,password.current.value);
    //console.log(message);
    seterrormessage(message)    
  };

  const toggleSignInForm = () => {
    setissignform(!issignform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/9c11501a-c5cd-49ca-b3bc-f1e6925794a8/OM-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="log"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black absolute w-3/12 p-12 my-32 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4 text-center">
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