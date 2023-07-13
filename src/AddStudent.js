// import React from "react";
import React, {useState} from "react";
import axios from 'axios';

function AddStudent({onStudentAdded}){

    const [id, setId]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName, setlastName]=useState('');
    const[email, setEmail]=useState('');
    const[major, setMajor]=useState('');
    const[courseTaken,setCoursesTaken]=useState('');

    const addingStudent=async()=>{
        const result= await axios.post(`http://localhost:8090/students`,{
        id,
        firstName,
        lastName,
        email,
        major,
        courseTaken,
    });
        console.log(result.data);
        onStudentAdded(result.data);
    }

    // useEffect(()=>{
    //     addingStudent();
    //  },[]);

    return(
        
        <div>
            <h1>ADD STUDENT</h1>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="Id"></input>
            <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="FirstName"></input>
            <input type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)} placeholder="lastName"></input>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"></input>
            <input type="text" value={major} onChange={(e)=>setMajor(e.target.value)} placeholder="major"></input>
            <input type="text" value={courseTaken} onChange={(e)=>setCoursesTaken(e.target.value)} placeholder="courseTaken"></input>
            <button onClick={addingStudent}>Add Student</button>
        
            </div>
    );
    
}
export default AddStudent;