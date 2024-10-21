import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.Name) {
    errors.Name = "Required";
  } else if (values.Name.length > 15) {
    errors.Name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Login = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      onLogin(values);
    },
  });

  return (
    <div className="bg-white p-5 w-96 shadow-lg rounded-lg">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="Name" className="block font-bold mb-1">
            Username
          </label>
          <input
            id="Name"
            name="Name"
            type="text"
            className="border w-full p-2 rounded"
            onChange={formik.handleChange}
            value={formik.values.Name}
          />
          {formik.errors.Name ? (
            <div className="text-red-600">{formik.errors.Name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block font-bold mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border w-full p-2 rounded"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
