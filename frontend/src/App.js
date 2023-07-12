import React from 'react';
import logo from './logo.svg';
import './App.css';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link to="/SignIn">SignIn</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
