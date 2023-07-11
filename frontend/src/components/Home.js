const Home = () => {
    return ( 
        <div className="home">
            <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span className="fs-4">Spring Boot App: Lab 7</span>
          </a>
    
          <ul className="nav nav-pills">
            <li className="nav-item nav-link" id="fetchCoursesBtn">Show Courses</li>
            <li className="nav-item nav-link" id="showCoursesFormBtn">Add new Course</li>
            <li className="nav-item nav-link" id="fetchStudentsBtn">Show Students</li>
            <li className="nav-item nav-link" id="showStudentsFormBtn">Add new Student</li>
            <li className="nav-item"><a href="/swagger-ui/index.html" target="_blank" className="nav-link">Docs</a></li>
          </ul>
        </header>

        <div id="allCoursesDiv" className="mt-5">
            <h2>All Courses List</h2>
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
                <tbody id="coursesTableBody"></tbody>
            </table>
        </div>
       
        <div id="createCourseDiv" className="mt-5">
            <h2>Create Course</h2>
            <form id="createCourseForm">
                <div className="mb-3">
                    <label htmlFor="idInput" className="form-label">ID</label>
                    <input type="number" className="form-control" id="idInput" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameInput" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="codeInput" className="form-label">Code</label>
                    <input type="text" className="form-control" id="codeInput" required />
                </div>
                <button type="submit" className="btn btn-primary">Create Course</button>
                <button id="cancelCreateBtn" type="button" className="btn btn-secondary">Cancel</button>
            </form>
        </div>

        <div id="updateCourseDiv" className="mt-5">
            <h2>Update Course</h2>
            <form id="updateCourseForm">
                <input type="hidden" id="updateCourseId" />
                <div className="mb-3">
                    <label htmlFor="updateCourseName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="updateCourseName" placeholder="Course Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="updateCourseCode" className="form-label">Code</label>
                    <input type="text" className="form-control" id="updateCourseCode" placeholder="Course Code" />
                </div>
                <button type="submit" className="btn btn-primary">Update Course</button>
            </form>
        </div>

    </div>
        </div>
     );
}
 
export default Home;