import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import ProductListPage from './ProductListPage';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("called");
        const userData = {
            username,
            password,
        };

        try {
            console.log("before axios");
            const response = await axios.post('http://localhost:8080/api/auth/authenticate', userData);
            const { access_token } = response.data;
            console.log(response);
            setAccessToken(access_token);
            Cookies.set('token', access_token, { expires: 1, path: '/' });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {
                accessToken ? (<ProductListPage accessToken={accessToken} />) :
                    (<div>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                    )
            }
        </div>
    );
};

export default Login;
