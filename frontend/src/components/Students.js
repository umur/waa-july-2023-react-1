import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import StudentList from './StudentList';
import Swal from 'sweetalert2'

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
        Swal.fire({
            title: 'Are you sure you want to delete this student?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/students/${id}`);
                    Swal.fire(
                        'Success!',
                        'The student has been deleted successfully.',
                        'success'
                    )
                    getStudents();
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'An error occurred while deleting the student, please try again',
                    })
                    console.error(error);
                }
              
            }
        })
        // const shouldDelete = window.confirm("Are you sure you want to delete this student?");
        // if (shouldDelete) {
        //     await axios.delete(`/students/${id}`);
        //     getStudents();
        // }
    }

    return ( 
        <>
            {students && <StudentList students={students} title="All Students" handleUpdate={handleUpdate} handleDelete={handleDelete} />}
        </>
     );
}
 
export default Students;