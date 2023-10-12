export const checkvalidate = (email, password) => {
  const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const ispasswordvalid =
    /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/.test(
      password
    );

  if (!isemailvalid) return "Email is not valid";

  if (!ispasswordvalid) return "Password not valid";

  // both  email and password are ok return null

  return null;
};
