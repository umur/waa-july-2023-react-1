const StudentList = ({ students, title, handleUpdate, handleDelete }) => {
    return ( 
        <>
        <div className="container">
            <h2>{title}</h2>
            <div className="mt-5">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Student ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Major</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.studentId}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.major}</td>
                        <td><button className="btn btn-primary" onClick={() => handleUpdate(student.id)}>Update</button></td>
                        <td><button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</button></td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
            </div>
        </div>
        
        </>
     );
}
 
export default StudentList;