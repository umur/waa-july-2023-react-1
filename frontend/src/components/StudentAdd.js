import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentAdd = () => {

  const [studentId, setStudentId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');

  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleStudentCreate = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const student = { studentId, firstName, lastName, email, major };
      await addStudent(student);
      const shouldAddAnotherStudent = window.confirm("\nStudent added successfully.\n\nWould you like to add another student?");
      if (!shouldAddAnotherStudent) {
        navigate('/showStudents');
      }
      resetForm();
    } catch (error) {
      alert("An error occurred while adding the student, please try again");
      console.error(error);
    } finally {
      setIsPending(false);
    }
  }

  const addStudent = async (student) => {
    await axios.post("/students", student);
  }

  const resetForm = () => {
    setStudentId('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMajor('');
  }

    return ( 
        <>
        <div id="createCourseDiv" className="container">
        <h2>Create Student</h2>
        <div className="mt-5">

        <form id="createCourseForm" onSubmit={handleStudentCreate}>

            <div className="mb-3">
            <label htmlFor="studentIdInput" className="form-label">Student ID</label>
            <input type="number" className="form-control" id="studentIdInput" value={studentId} onChange={e => setStudentId(e.target.value)} required />
            </div>

            <div className="mb-3">
            <label htmlFor="firstNameInput" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstNameInput" value={firstName} onChange={e => setFirstName(e.target.value)} required />
            </div>

            <div className="mb-3">
            <label htmlFor="lastNameInput" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastNameInput" value={lastName} onChange={e => setLastName(e.target.value)} required />
            </div>

            <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input type="text" className="form-control" id="emailInput" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
            <label htmlFor="majorInput" className="form-label">Major</label>
            <input type="text" className="form-control" id="majorInput" value={major} onChange={e => setMajor(e.target.value)} required />
            </div>

            {isPending ? <button type="submit" className="btn btn-disabled">Adding Student...</button> :
            <button type="submit" className="btn btn-primary">Add Student</button>}

        </form>
        </div>
        </div>
        </>
     );
}
 
export default StudentAdd;