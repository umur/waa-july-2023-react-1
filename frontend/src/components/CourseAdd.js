import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const CourseAdd = () => {

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleCourseCreate = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const course = { name, code };
      await addCourse(course);
      Swal.fire({
        title: 'Course added successfully',
        text: "Would you like to add another course?",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I want to add another'
      }).then((result) => {
        if (!result.isConfirmed) {
          navigate('/');
        }
        resetForm();
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while adding the course, please try again',
      })
      console.error(error);
    } finally {
      setIsPending(false);
    }
  }

  const addCourse = async (course) => {
    await axios.post("/courses", course);
  }

  const resetForm = () => {
    setName('');
    setCode('');
  }

  return (
    <div id="createCourseDiv" className="container">
      <h2>Create Course</h2>

      <div className="mt-5">

      <form id="createCourseForm" onSubmit={handleCourseCreate}>

        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameInput" value={name} onChange={e => setName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="codeInput" className="form-label">Code</label>
          <input type="text" className="form-control" id="codeInput" value={code} onChange={e => setCode(e.target.value)} required />
        </div>

        {isPending ? <button type="submit" className="btn btn-secondary" disabled>Adding Course...</button> :
          <button type="submit" className="btn btn-primary">Add Course</button>}

      </form>
      </div>
    </div>
  );
}

export default CourseAdd;