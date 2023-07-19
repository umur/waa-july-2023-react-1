import { useState,useEffect } from "react";
import CreatePerson from "./CreatePerson";
import axios from "axios";
import { Link, Outlet ,useNavigate } from "react-router-dom";

export default function Persons() {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
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

  const handleEdit = (personId) => {
    const person = persons.find((person) => person.id === personId);
    if (person) {
      // Redirect to the EditPerson component with the person's data
      navigate(`edit/${person.id}`, { state: { person } });
    }
  };

  const handleDelete = async (personId) => {
    try{
        console.log("Id "+personId);
        await axios.delete(`http://localhost:8080/persons/${personId}`);
        var pers = persons.filter((person) => person.id !== personId);
        setPersons(pers);
      
    } catch(error){
        console.error(error);
    }
  };

  const handleCreate = () => {
    // Perform any necessary actions before creating
    setIsCreating(true); // Set the state to indicate create operation
  };

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.email}</td>
                <td>
                  <button onClick={() => handleDelete(person.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(person.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        
    </div>
    <nav>
          <Link to='create'>Create Person</Link>
        </nav>
        <Outlet/>
    </>
    
  );
}
