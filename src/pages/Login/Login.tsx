import React, { ChangeEvent, useState } from "react";
import SimpleInput from "../../generic/inputs/SimpleInput/SimpleInput";
import CheckBox from "../../generic/inputs/CheckBox/CheckBox";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import axios from "axios";
interface Ilogin {
  email: string;
  password: string;
}

const Login = () => {
  const { setAuth } = useAuth();
  const [formDate, setFormData] = useState<Ilogin>({
    email: "",
    password: "string",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const filedName = event.target.name;
    const tempFormDate = { ...formDate };
    tempFormDate[filedName as keyof Ilogin] = event.target.value;
    setFormData({ ...tempFormDate });
  }

  async function submit(event: MouseEvent): Promise<void> {
    event.preventDefault();
    const response = await axios.post("http://localhost:8080/api/v1/auth/login", { ...formDate });
    setAuth(response.data);
    return;
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action="#" method="POST">
            <SimpleInput
              id="email"
              name="email"
              type="email"
              placeholder="email"
              label="Email"
              value={formDate.email}
              onChange={handleChange}
            />

            <SimpleInput
              id="password"
              name="password"
              type="password"
              placeholder="password"
              label="Password"
              value={formDate.password}
              onChange={handleChange}
            />

            <div className="flex items-center justify-between">
              {/* <CheckBox id="remember-me" name="remember-me" label="Remember me" /> */}

              {/* <div className="text-sm leading-6">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e) => submit(e)}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
