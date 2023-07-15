import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuthPath } from "../../PublicRoutes";
import { authService } from "../service/auth.service";
import { ErrorResponse } from "../../../shared/model/Error";
import { signInPath } from "./Signin";

export const signUpPath = "/signup";

function Signup() {
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();

    authService
      .signup({
        email: e.target[0].value,
        firstName: e.target[1].value,
        lastName: e.target[2].value,
        password: e.target[3].value,
        retypePassword: e.target[4].value,
        address: {
          street: e.target[5].value,
          city: e.target[6].value,
          zip: e.target[7].value,
        },
      })
      .then((x) => {
        setError(undefined);
        navigate(getAuthPath(signInPath));
      })
      .catch((err: ErrorResponse) => {
        setError(err.message);
      });
  };

  return (
    <form className="row g-3" onSubmit={onSubmit}>
      <h3>Sign-up</h3>
      {error && <div className="text-danger">{error}</div>}
      <div className="col-md-12">
        <label className="form-label">Email</label>
        <input required type="email" className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">First name</label>
        <input required type="text" className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Last name</label>
        <input required type="text" className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input required type="password" className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Re-type Password</label>
        <input required type="password" className="form-control" />
      </div>
      <div className="col-12">
        <label className="form-label">Street</label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="1234 Main St"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">City</label>
        <input required type="text" className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Zip</label>
        <input required type="text" className="form-control" />
      </div>
      <div className="align-items-baseline d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
          Please sign in&nbsp;<Link to={getAuthPath("/signin")}>here</Link>
        </div>
      </div>
    </form>
  );
}

export default Signup;
