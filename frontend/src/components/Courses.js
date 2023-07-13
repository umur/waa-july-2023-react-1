import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseList from './CourseList';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Courses = () => {
    const [courses, setCourses] = useState(null);
    
    const navigate = useNavigate();

    const getCourses = async () => {
        const result = await axios.get("/courses");
        setCourses(result.data);
    }

    useEffect(() => {
        getCourses();
    }, [])

    const handleUpdate = async (id) => {
        navigate("/updateCourses/"+id);
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this course?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/courses/${id}`);
                    Swal.fire(
                        'Success!',
                        'The course has been deleted successfully.',
                        'success'
                    )
                    getCourses();
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'An error occurred while deleting the course, please try again',
                    })
                    console.error(error);
                }
              
            }
        })
        // const shouldDelete = window.confirm("Are you sure you want to delete this course?");
        // if (shouldDelete) {
        //     await axios.delete(`/courses/${id}`);
        //     getCourses();
        // }
    }

    return (
        <>
            {courses && <CourseList courses={courses} title="All Courses" handleUpdate={handleUpdate} handleDelete={handleDelete} />}
        </>
    );
}

export default Courses;