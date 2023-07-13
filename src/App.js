import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from "react";
import './AddStudent';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
import UpdateStudent from './UpdateStudent';


function App() {
  const [studentState, setStudent] = useState('');

  const getStudent = async () => {
    const result = await axios.get(`http://localhost:8090/students`);
    setStudent(result.data);
  }

  useEffect(() => {
    getStudent();
  }, [])

  const addStudent=(student)=>{
    setStudent((prevState)=>[...prevState, student]);
  }

  // const updateStudent=(student)=>{
  //   setStudent((prevState)=>[...prevState, student]);
  // }
  const updateStudent=(student)=>{
    console.log(student);
    // setStudent((prevState)=>[...prevState, student]);
  }

  const deletingStudent=(student)=>{
    setStudent((prevState)=>[...prevState, student]);
  }

  return (
    <div>
      <AddStudent onStudentAdded={addStudent}/>
      <br></br>
      <br></br>
      <DeleteStudent studentToDelete={deletingStudent}/>
      <br></br>
      <UpdateStudent onUpdatedStudent={updateStudent}/>
      <br></br>
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
        {studentState && studentState.map((item) => (
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
    </div >

  );
}

export default App;
