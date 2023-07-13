import './App.css';
import CourseAdd from './components/CourseAdd';
import CourseUpdate from './components/CourseUpdate';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";


const MyRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/showCourses", element: <CourseAdd /> },
    { path: "/createCourses", element: <CourseAdd /> },
    { path: "/updateCourses/:id", element: <CourseUpdate /> },
    { path: "/showStudents", element: <CourseAdd /> },
    { path: "/createStudents", element: <CourseAdd /> },
    { path: "/docs", element: <CourseAdd /> },
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
