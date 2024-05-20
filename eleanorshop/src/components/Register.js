import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import './styles/Register.css';

function Register() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  return (
    <div className="container">
      <header>
        <h2>Register Account</h2>
        <br />
        <br />

        {profile ? (
          <div> 
            <p>Registered Successfully !!!</p>
            <img src={profile.picture} alt="user" className="profile-picture" />
            <h3>Welcome : {profile.name} 💕😘 ( ͡° ͜ʖ ͡°) 😘💕👌  </h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button className="button logout-button" onClick={logOut}>
              Log out
            </button>
          </div>
        ) : (
          <button className="button google-button" onClick={() => login()}>
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="google-logo"
            />
            Sign in with Google 🚀
          </button>
        )}
      </header>
    </div>
  );
}

export default Register;
