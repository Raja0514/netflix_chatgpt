import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { togglegptsearch } from "../utils/gptslice";
import { SUPPORTED_LANGUAGE } from "../utils/constant";
import { changeLaguage } from "../utils/configslice";
import { HEADER_IMG_URL } from "../utils/constant";
import { USER_LOGO } from "../utils/constant";
import { addUser, removeUser } from "../utils/userslice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const showgptsearch = useSelector((store) => store.gpt.showgptsearch);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  function handleGpt() {
    dispatch(togglegptsearch());
  }

  function selectlanguage(e) {
    dispatch(changeLaguage(e.target.value));
    //console.log(e.target.value);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayname } = user;
        dispatch(addUser({ uid: uid, email: email, dispalyname: displayname }))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-col  md:flex-row justify-between ">
      {/* by default for mobile  */}
      <img
        className="w-44 mx-auto md:mx-0"
        src={HEADER_IMG_URL}
        alt="log netflix"
      />

      {user && (
        <div className="flex  md:p-2 md:m-2 justify-between  ">
          {showgptsearch && (
            <select
              className="px-1 bg-gray-800  text-white rounded-lg"
              onChange={selectlanguage}
            >
              {SUPPORTED_LANGUAGE.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white p-2 m-1  bg-purple-950 px-3  rounded-lg  "
            onClick={handleGpt}
          >
            {showgptsearch ? "Home Page" : "GPT Search"}
          </button>

          <img
            className="w-10 h-10 m-1 hidden  md:inline-block "
            src={USER_LOGO}
            alt="userlogo"
          />

          <button
            onClick={handlesignout}
            className="text-white bg-red-600 m-1 p-2 rounded-xl"
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
