import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {

  const [showComponent, setShowComponent] = useState(true);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  return (
<div>

      {showComponent ? <SignIn /> : <SignUp />}

      <a href="#" onClick={handleClick}>
      { showComponent ? "Signup" : "SignIn" }
      </a>
    </div>
  );
}

export default App;
