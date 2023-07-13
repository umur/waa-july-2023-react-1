import React, { useState } from "react";
import axios from 'axios';

function UpdateStudent({ onUpdatedStudent }) {

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('');
    const [courseTaken, setCoursesTaken] = useState('');

    const student = {
        firstName,
        lastName,
        email,
        major,
        courseTaken
    }


    const settingUpdatedStudent = async () => {
        const result = await axios.put(`http://localhost:8090/students/${id}`, student);
        onUpdatedStudent(result.data);
    }

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Id"></input>
            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="FirstName"></input>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="lastName"></input>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
            <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} placeholder="major"></input>
            <input type="text" value={courseTaken} onChange={(e) => setCoursesTaken(e.target.value)} placeholder="courseTaken"></input>
            <button onClick={settingUpdatedStudent}>Update Student</button>
        </div>
    );
}
export default UpdateStudent;