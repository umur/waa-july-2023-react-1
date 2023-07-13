import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseList from './CourseList';
import { useNavigate } from "react-router-dom";

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

    const handleDelete = async (id) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this course?");
        if (shouldDelete) {
            await axios.delete(`/courses/${id}`);
            getCourses();
        }
    }

    return (
        <>
            {courses && <CourseList courses={courses} title="All Courses" handleUpdate={handleUpdate} handleDelete={handleDelete} />}
        </>
    );
}

export default Courses;