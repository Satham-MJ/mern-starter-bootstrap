import React from "react";

const Register = () => {
  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <h1 className="my-4">Register</h1>
        <form action="">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
