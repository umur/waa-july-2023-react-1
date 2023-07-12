import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Persons from './Persons';

function App() {
  const initialPersons = [];

  const [persons, setPersons] = useState(initialPersons);

  const getPersons = async () => {
    // send request
    const result = await axios.get("http://localhost:8080/persons");
    console.log(result);
    // update state
    setPersons(result.data);
  }

  useEffect(() => {
    getPersons();

    return () => {
      // cleanup
    }
  }, [])


  return (
    <div className='App'>
      <Persons persons={persons} />
    </div>
  );
}

export default App;
