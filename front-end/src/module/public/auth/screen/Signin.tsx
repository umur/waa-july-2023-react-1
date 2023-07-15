import { useState } from "react";
import { useNavigate } from "react-router";
import { ErrorResponse } from "../../../shared/model/Error";
import { authService } from "../service/auth.service";
import { Link } from "react-router-dom";
import { productListPath } from "../../../private/product/screen/ProductList";

export const signInPath = "/signin";

function Signin() {
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();

    authService
      .signin({
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((x) => {
        setError(undefined);
        navigate(productListPath);
      })
      .catch((err: ErrorResponse) => {
        setError(err.message);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Sign-in</h3>
      {error && <div className="text-danger">{error}</div>}
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" required />
      </div>
      <div className="align-items-baseline d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
          Please sign up&nbsp;<Link to="/auth/signup">here</Link>
        </div>
      </div>
    </form>
  );
}

export default Signin;
