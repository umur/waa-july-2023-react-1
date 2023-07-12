import axios from "axios";
import React, { useState } from "react";

const SignIn = () => {

  const [signInState, setSignInState] = useState({
    email: "",
    password: ""
  });
  const onCreateButtonClicked = async (event) => {

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    const copy = { ...signInState };

    await axios.post("http://localhost:8080/uaa/signin", copy, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      if (response.status === 200) {
        console.log("logged in");
        localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));
      }
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });

  }
  const onChanged = (event) => {
    const copy = { ...signInState };
    copy[event.target.name] = event.target.value;
    setSignInState(copy);
  }


  return (<div className="SignIn">
    <h1>Signin</h1>
    Email:
    <input
      type="text"
      value={signInState.email}
      name="email"
      onChange={onChanged}
    />
    <br />
    Password:
    <input
      type="text"
      value={signInState.password}
      name="password"
      onChange={onChanged}
    />
    <br />
    <input
      type="button"
      onClick={onCreateButtonClicked}
      value="Signin" />

  </div>)
}


export default SignIn;