import './App.css';
import CourseAdd from './components/CourseAdd';
import CourseList from './components/CourseList';
import CourseUpdate from './components/CourseUpdate';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Students from './components/Students';
import StudentAdd from './components/StudentAdd';
import StudentUpdate from './components/StudentUpdate';


const MyRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/showCourses", element: <CourseList /> },
    { path: "/createCourses", element: <CourseAdd /> },
    { path: "/updateCourses/:id", element: <CourseUpdate /> },
    { path: "/showStudents", element: <Students /> },
    { path: "/createStudents", element: <StudentAdd /> },
    { path: "/updateStudents/:id", element: <StudentUpdate /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <MyRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
