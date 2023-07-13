import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      const shouldAddAnotherCourse = window.confirm("\nCourse added successfully.\n\nWould you like to add another course?");
      if (!shouldAddAnotherCourse) {
        navigate('/');
      }
      resetForm();
    } catch (error) {
      alert("An error occurred while adding the course, please try again");
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

        {isPending ? <button type="submit" className="btn btn-disabled">Adding Course...</button> :
          <button type="submit" className="btn btn-primary">Add Course</button>}

      </form>
      </div>
    </div>
  );
}

export default CourseAdd;