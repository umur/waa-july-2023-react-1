import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
  const [user, setUser] = useState({
    firstName: '',
    email: '',
    lastName: '',
    password:'',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('/users', user);
        console.log('User created:', response.data);
  
        setUser({ firstName: '', email: '', lastName: '',password:''});
      } catch (error) {
        console.error('Error creating user:', error);
      }
  };

  return (
    <div className="user-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
            Password:
            <input type='text' name="password" value={user.password} onChange={handleChange}/>
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
