export const checkvalidate = (email, password,phonenumber) => {
  const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const ispasswordvalid =
    /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/.test(
      password
    );

//const isvalidphone=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phonenumber);

  //if(!isvalidphone) return "Phone number is not valid";

  if (!isemailvalid) return "Email is not valid";

  if (!ispasswordvalid) return "Password not valid";

  // both  email and password are ok return null

  return null;
};
