import React from "react";


const SignIn = ()=>{

    return (<div className="SignIn">
          <h1>Signin</h1>
          <form id="signin-form">
            <label for="email">Email:</label>
            <input type="email" id="email" required />
            <br />
            <label for="password">Password:</label>
            <input type="password" id="password" required /> 
            <br />
            <button type="submit">Signin</button>
          </form>
          </div>)
}


export default SignIn;