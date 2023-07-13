import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const StudentUpdate = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [studentId, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getStudent = async () => {
            const result = await axios.get(`/students/${id}`);
            setStudent(result.data);
            setStudentId(result.data.studentId);
            setFirstName(result.data.firstName);
            setLastName(result.data.lastName);
            setEmail(result.data.email);
            setMajor(result.data.major);
        }
        getStudent();
    },[id])
    

    const handleStudentUpdate = async (e) => {
        e.preventDefault();
        setIsPending(true);

        try {
            const updatedStudent = {studentId, firstName, lastName, email, major };
            await updateStudent(updatedStudent);
            Swal.fire(
                'Success!',
                'The student has been updated successfully.',
                'success'
            )
            navigate("/showStudents");
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while updating the student, please try again',
            })
            console.error(error);
        } finally {
            setIsPending(false);
        }
    }

    const updateStudent = async (updatedStudent) => {
        await axios.put(`/students/${id}`, updatedStudent);
    }


    return ( 
        <>
            {student && <div className="container">
                <h2>Update Student</h2>

                <div className="mt-5">

                <form id="updateStudentForm" onSubmit={handleStudentUpdate}>
                    <input type="hidden" id="updateStudentId" value={student.id} />

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

                    {isPending ? 
                    <button type="submit" className="btn btn-secondary" disabled>Updating Student...</button> : 
                    <button type="submit" className="btn btn-primary">Update Student</button>}

                </form>
                </div>
            </div>}
        </>
     );
}
 
export default StudentUpdate;