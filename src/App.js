import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Lab 2 Student And Courses
      </h1>
      <div>
        <input
          type="text" id="txtId" placeholder="enter Major to get" />

        <button id="getByMajor">GetByMajor</button>
        <div id="output">
          <br></br>
          <table border="1" align='center'>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Major</th>
              <th>CoursesTaken</th>
            </tr>
            <tbody id="myTableBody">

            </tbody>
          </table>
          <br></br>
          <div>
            <input type="text" id="id" placeholder="Id" />
            <input type="text" id="firstName" placeholder="First Name" />
            <input type="text" id="lastName" placeholder="Last Name" />
            <input type="text" id="email" placeholder="Email" />
            <input type="text" id="major" placeholder="Major" />
            <input type="text" id="coursesTaken" placeholder="Courses Taken" />
            <button id="addStudent">Add Student</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
