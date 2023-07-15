import { Route, Routes } from "react-router-dom";
import Signin, { signInPath } from "./auth/screen/Signin";
import Signup, { signUpPath } from "./auth/screen/Signup";

export const authPath = "/auth";

export const getAuthPath = (url: string) => `${authPath}${url}`;

function PublicRoutes() {
  return (
    <div className="container">
      <div className="mt-5 m-auto" style={{ width: "500px" }}>
        <Routes>
          <Route path={signInPath} element={<Signin />} />
          <Route path={signUpPath} element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default PublicRoutes;
