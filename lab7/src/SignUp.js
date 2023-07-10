import React from "react";


const SignUp = ()=>{

    return (<div className="SignUp">
          <h1>Signup</h1>
          <form id="signup-form">
    <label for="email">Email:</label>
    <input type="email" id="signup-email" required />
    <br />
    <label for="firstName">First Name:</label>
    <input type="text" id="signup-firstname" required />
    <br />
    <label for="lastName">Last Name:</label>
    <input type="text" id="signup-lastname" required />
    <br />
    <label for="city">City:</label>
    <input type="text" id="signup-city" required />
    <br />
    <label for="zip">ZIP:</label>
    <input type="text" id="signup-zip" required /> 
    <br />
    <label for="password">Password:</label>
    <input type="password" id="signup-password" required />
    <br />
    <button type="submit">Signup</button>
    </form>
          </div>)
}


export default SignUp;