import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Login = ()=>{
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [loginErrorMessage, setLoginErrorMessage] = useState('')

    useEffect(() => {
        console.log('user', user)
    }, [user])

    const handleUserChange = e => {
        setUser(previous => (
            {...previous, [e.target.name]: e.target.value}))
        // if(e.target.name === 'email') {
        //     setUser({password: user.password, email: e.target.value})
        // }
        // if(e.target.name === 'password') {
        //     setUser({password: e.target.value, email: user.email})
        // }
    }

    const loginButtonClicked = (event) => {
        if(!user.email) {
            setLoginErrorMessage("Email is mandatory");
            return;
        }
        if(!user.password) {
            setLoginErrorMessage("Password is mandatory");
            return;
        }
        setLoginErrorMessage("");
        postUserCredentials(user);
    }


    const postUserCredentials = async (userCredentials) => {
        // send request
        try {
            const result = await axios.post("/uaa/signin", userCredentials);
            console.log(result);
        }catch (e) {
            setLoginErrorMessage('Invalid user credentials')
        }
    }

    return (
        <div className="auth-inner">
                <h3>Sign In</h3>
                <span class="error text-danger">{loginErrorMessage}</span>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        value={user.email}
                        onChange={handleUserChange}
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        value={user.password}
                        onChange={handleUserChange}
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button onClick={loginButtonClicked} className="btn btn-primary">
                        Submit
                    </button>
                </div>
        </div>
    )
}

export default Login;