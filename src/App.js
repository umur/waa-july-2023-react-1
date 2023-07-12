import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [idValue, setIdValue] = useState('');
  const [majorValue, setMajorValue] = useState('');
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');

  const getAllButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:8080/students');
      setTableData(response.data);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getByIdButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/students/${idValue}`);
      setTableData([response.data]);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const getByMajorButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/studentsmajor/${majorValue}`);
      setTableData([response.data]);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const addStudent = async () => {
    try {
      const response = await axios.post('http://localhost:8080/students', {
        id,
        firstName,
        lastName,
        major
      });
      console.log('Student added:', response.data);
      // You can update the state or perform other actions upon successful addition
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };
  useEffect(() => {
    const storedShowTable = localStorage.getItem('showTable');
    if (storedShowTable === 'true') {
      getAllButtonClick();
    }
    return () => {
      localStorage.removeItem('showTable');
    };
  }, []);

  return (
    <div>
      <h4>Student</h4>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Id" />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} placeholder="Major" />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <br></br>
      <div>
        <input type="text" value={idValue} onChange={(e) => setIdValue(e.target.value)} />
        <button onClick={getByIdButtonClick}>Get by ID</button>
      </div>
      <br></br>
      <div>
        <input type="text" value={majorValue} onChange={(e) => setMajorValue(e.target.value)} />
        <button onClick={getByMajorButtonClick}>Get by major</button>
     </div>
     <br></br>
      <button onClick={getAllButtonClick}>Get all</button>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Major</th>
              <th>CoursesTaken</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.major}</td>
                <td>{item.coursesTaken}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;