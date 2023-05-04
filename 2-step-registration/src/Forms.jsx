import React, { useState } from "react";
import "./forms.css";

function Forms() {
  const initState = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile_password: "",
    gender: "",
  };
  const [values, setValues] = useState(initState);

  const [validations, setValidations] = useState(initState);

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";

    if (!value) {
      message = `${name} is required`;
    }

    if (value && name === "name" && (value.length < 3 || value.length > 50)) {
      message = "Name must contain between 3 and 50 characters";
    }

    if (value && name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      message = "Email format must be as example@mail.com";
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleChange = (e) => {
    // const { name, value } = e.target
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <div className="container-fluid h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp "
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 h-90 p-5  ">
          <h3 className="pb-3">Registration Form</h3>
            <form>
              <div className="form-outline mb-2">
                <label className="form-label">Full Name</label> 
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className='error'> {validations.name}</div>
              </div>
              

              <div className="form-outline mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-sm"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="error"> {validations.email}</div>
              </div>

              <div className="form-outline mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-sm"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className='error'> {validations.password}</div>
              </div>

              <div className="form-outline mb-2">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  className="form-control form-control-sm"
                  placeholder="Confirm password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className='error'> {validations.confirm_password}</div>
              </div>

              <div className="form-outline mb-2">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  className="form-control form-control-sm"
                  placeholder="Entel Mobile Number"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className='error'> {validations.mobile}</div>
              </div>

              <label className="form-label">Gender</label>
              <div className="form-outline mb-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    onBlur={validateOne}
                  />
                  <label className="form-check-label">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    onBlur={validateOne}
                  />
                  <label className="form-check-label" >
                    Female
                  </label>
                </div>
                <div className='error'> {validations.gender}</div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary px-3 ">
                  Send OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forms;
