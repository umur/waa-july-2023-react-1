import { useState } from "react";
import CreatePerson from "./CreatePerson";
import axios from "axios";

export default function Persons(props) {
  const [isCreating, setIsCreating] = useState(false);
  var persons = props.persons;

  const handleEdit = (personId) => {
    // Perform any necessary actions for editing
  };

  const handleDelete = async (personId) => {
    try{
        console.log("Id "+personId);
        await axios.delete(`http://localhost:8080/persons/${personId}`);
        persons = props.persons.filter((person) => person.id !== personId);
        
      
    } catch(error){
        console.error(error);
    }
  };

  const handleCreate = () => {
    // Perform any necessary actions before creating
    setIsCreating(true); // Set the state to indicate create operation
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isCreating ? (
        <CreatePerson />
      ) : (
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
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!isCreating && (
        <button onClick={handleCreate}>Create Person</button>
      )}
    </div>
  );
}
