import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import './font-awesome.css';

import React, { useState } from 'react';
import Login from './Login';
import GenericTable from './GenericTable';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  const loginButtonClick = () => {
    // todo later we set loggedInUser object
    setLoggedInUser(true);
  }

  let testTableData = {
        tableId:'genericTable',
        headers:['ID', 'Email', 'Firstname', 'Lastname'],
        columnNames:['id', 'email', 'firstname', 'lastname'],
        rows:[
            {'id':1,email:'uinan@mmiu.edu',firstname:'Umur',lastname:'Inan'},
            {'id':2,email:'dinomov@mmiu.edu',firstname:'Dilshod',lastname:'Inom'}
        ]
  }
  return (
      //loggedInUser ? <h1>Welcome </h1> : <Login />
      <GenericTable tableData={testTableData}/>
  )
}

export default App;
