import { useEffect, useState } from 'react';
import './App.css';
import Person from './Person';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import PersonDetail from './PersonDetail';
import ErrorPage from './ErrorPage';
import CreateUser from './CreateUser';
import 'bootstrap/dist/css/bootstrap.css';




function App() {

  const initialPersons = [
    { id: 1, firstName: "Joan", lastName: "Chifamba", password: "jo123", email: "jo@gmail.com" }
  ]

  const [personsState, setpersonsState] = useState(initialPersons);
  const getPersons = async () => {
    console.log("inside get person")
    const result = await axios.get("/users");
    console.log(result.data);
    setpersonsState(result.data);
  }

  useEffect(() => {
    getPersons();
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/persons">Person</Link>
          </li>
          <li>
            <Link to="/createUser">CreateUser</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/persons" element={<Person persons={personsState} />} />
        <Route path="/persons/:id" element={<PersonDetail />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>






  )














  // return (
  // <>
  //   <h2>All Users</h2>
  //   <div>
  //     {
  //       personsState.map(p => (
  //         <div key={p.id}>
  //           {p.id}
  //           {p.email}
  //           {p.firstName}
  //           {p.lastName}
  //           {p.password}
  //         </div>
  //       ))
  //     }
  //   </div>
  // </>
  // );
}

export default App;
