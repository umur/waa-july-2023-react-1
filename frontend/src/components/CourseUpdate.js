import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const CourseUpdate = () => {

    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getCourse = async () => {
            const result = await axios.get(`/courses/${id}`);
            setCourse(result.data);
            setName(result.data.name);
            setCode(result.data.code);
        }
        getCourse();
    },[id])

    const handleCourseUpdate = async (e) => {
        e.preventDefault();
        setIsPending(true);

        try {
            const updatedCourse = {name, code };
            await updateCourse(updatedCourse);
            window.alert("\nCourse updated successfully.");
            navigate("/");
        } catch (error) {
            alert("An error occurred while updating the course, please try again");
            console.error(error);
        } finally {
            setIsPending(false);
        }
    }

    const updateCourse = async (updatedCourse) => {
        await axios.put(`/courses/${id}`, updatedCourse);
    }

    return (
        <>
            {course && <div className="container">
                <h2>Update Course</h2>

                <div className="mt-5">

                <form id="updateCourseForm" onSubmit={handleCourseUpdate}>
                    <input type="hidden" id="updateCourseId" value={course.id} />

                    <div className="mb-3">
                        <label htmlFor="updateCourseName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="updateCourseName" value={name} onChange={e => setName(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="updateCourseCode" className="form-label">Code</label>
                        <input type="text" className="form-control" id="updateCourseCode" value={code} onChange={e => setCode(e.target.value)}/>
                    </div>

                    {isPending ? 
                    <button type="submit" className="btn btn-disabled">Updating Course...</button> : 
                    <button type="submit" className="btn btn-primary">Update Course</button>}

                </form>
                </div>
            </div>}
        </>
    );
}

export default CourseUpdate;