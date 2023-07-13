import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import StudentList from './StudentList';

const Students = () => {

    const [students, setStudents] = useState(null);
    
    const navigate = useNavigate();

    const getStudents = async () => {
        const result = await axios.get("/students");
        setStudents(result.data);
    }

    useEffect(() => {
        getStudents();
    }, [])

    const handleUpdate = async (id) => {
        navigate("/updateStudents/"+id);
    }

    const handleDelete = async (id) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this student?");
        if (shouldDelete) {
            await axios.delete(`/students/${id}`);
            getStudents();
        }
    }

    return ( 
        <>
            {students && <StudentList students={students} title="All Students" handleUpdate={handleUpdate} handleDelete={handleDelete} />}
        </>
     );
}
 
export default Students;