import axios from "axios";
import React, { useState } from "react";


const SignUp = () => {

      const [signUpState, setSignUpState] = useState({
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            city: "",
            zip: ""
      });
      const onCreateButtonClicked = async (event) => {
            const copy = { ...signUpState };

            await axios.post("http://localhost:8080/uaa/signup", copy, {
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
            const copy = { ...signUpState };
            copy[event.target.name] = event.target.value;
            setSignUpState(copy);
      }

      return (<div className="SignUp">
            <h1>Signup</h1>
            First Name:
            <input
                  type="text"
                  value={signUpState.firstname}
                  name="firstname"
                  onChange={onChanged}
            />
            <br />
            Last Name:
            <input
                  type="text"
                  value={signUpState.lastname}
                  name="lastname"
                  onChange={onChanged}
            />
            <br />
            Email:
            <input
                  type="text"
                  value={signUpState.email}
                  name="email"
                  onChange={onChanged}
            />
            <br />
            Password:
            <input
                  type="text"
                  value={signUpState.password}
                  name="password"
                  onChange={onChanged}
            />
            <br />
            City:
            <input
                  type="text"
                  value={signUpState.city}
                  name="city"
                  onChange={onChanged}
            />
            <br />
            Zip:
            <input
                  type="text"
                  value={signUpState.zip}
                  name="zip"
                  onChange={onChanged}
            />
            <br />
            <input
                  type="button"
                  onClick={onCreateButtonClicked}
                  value="SignUp" />

      </div >)
}


export default SignUp;