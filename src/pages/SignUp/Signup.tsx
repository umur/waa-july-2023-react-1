import React, { ChangeEvent, MouseEventHandler, useState, useContext } from "react";
import SimpleInput from "../../generic/inputs/SimpleInput/SimpleInput";
import CheckBox from "../../generic/inputs/CheckBox/CheckBox";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthProvider";

interface Isignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const { setAuth } = useAuth();

  const [formDate, setFormData] = useState<Isignup>({
    firstName: "",
    lastName: "",
    email: "",
    password: "string",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const filedName = event.target.name;
    const tempFormDate = { ...formDate };
    tempFormDate[filedName as keyof Isignup] = event.target.value;
    setFormData({ ...tempFormDate });
  }

  async function submit(event: MouseEvent) :Promise<void> {
    event.preventDefault();
    const response = await axios.post("http://localhost:8080/api/v1/auth/signup", { ...formDate });
    setAuth(response.data);
    return 
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
            <div className="flex gap-2">
              <SimpleInput
                id="first-name"
                name="firstName"
                type="text"
                placeholder="First Name"
                label="First Name"
                value={formDate.firstName}
                onChange={handleChange}
              />

              <SimpleInput
                id="first-name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                label="Last Name"
                value={formDate.lastName}
                onChange={handleChange}
              />
            </div>

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

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e) => submit(e)}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
