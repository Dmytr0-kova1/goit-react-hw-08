import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="min-h-screen flex flex-col justify-center items-center">
          <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend">Register</legend>
            <label className="fieldset-label flex flex-col items-start">
              <span>Name:</span>
              <Field className="input" name="name" placeholder="Name" />
            </label>
            <label className="fieldset-label flex flex-col items-start">
              <span>Email:</span>
              <Field
                className="input"
                name="email"
                type="email"
                placeholder="Email"
              />
            </label>
            <label className="fieldset-label flex flex-col items-start">
              <span>Password:</span>
              <Field
                className="input"
                name="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <button className="btn btn-neutral mt-4" type="submit">
              Register
            </button>
            <Link to="/login" className="link link-hover">
              Already have an account?
            </Link>
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
