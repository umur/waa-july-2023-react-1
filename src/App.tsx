import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./generic/SideNav/SideNav";
import SimpleInput from "./generic/inputs/SimpleInput/SimpleInput";
import SimpleSelectMenu from "./generic/inputs/SimpleSelectMenu/SimpleSelectMenu";
import MainLayout from "./layouts/MainLayout/MainLayout";
import UnAuthLayout from "./layouts/UnAuthLayout/UnAuthLayout";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>

          <Route path="/" element={<UnAuthLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
