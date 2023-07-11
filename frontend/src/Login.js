import React from 'react';


const Login = ()=>{


    return (
            <div className='box'>
                <h1>Sign in into your account</h1>
                <input type='email' name='email' placeholder='email' className='email'/>
                <input type='password' name='password' placeholder='********' className='password'/>

                <a href='#'>
                    <div className='btn'>Sign In</div>
                </a>

                <a href='#'>
                    <div id='btn2'>Sign Up</div>
                </a>
            </div>
    )
}


export default Login;