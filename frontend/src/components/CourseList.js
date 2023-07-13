const CourseList = ({ courses, title, handleUpdate, handleDelete }) => {

  return (
    <div>
      <h2>{title}</h2>
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map(course => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.code}</td>
                  <td><button className="btn btn-primary" onClick={() => handleUpdate(course.id)}>Update</button></td>
                  <td><button className="btn btn-danger" onClick={() => handleDelete(course.id)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
