import React from 'react';


export default function Register() {

    return (
        <div className='box'>
            <h1>Sign up</h1>
            <label>Email:</label>
            <input type='email' name='email' placeholder='email' className='email'/>
            <label>Firstname:</label>
            <input type='firstname' name='firstname' placeholder='Firstname' className='firstname'/>
            <label>Lastname:</label>
            <input type='lastname' name='lastname' placeholder='lastname' className='lastname'/>
            <label>Password:</label>
            <input type='password' name='password' placeholder='********' className='password'/>
            <label>Confirm password:</label>
            <input type='confirmPassword' name='confirmPassword' placeholder='********' className='password'/>

            <a href='#'>
                <div className='btn'>Sign Up</div>
            </a>
        </div>
    )
}
