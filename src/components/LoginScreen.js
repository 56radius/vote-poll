import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//importing images
import picture from "../assets/img/mental.jpeg";

import Swal from "sweetalert2";

function LoginScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 d-flex flex-column justify-content-center">
                  <div className="py-4">
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                      }}
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <span className="d-none d-lg-block">
                        {" "}
                        <span
                          style={{
                            color: "green",
                          }}
                        >
                          {" "}
                          AVINX{" "}
                        </span>{" "}
                        HEALTH{" "}
                      </span>
                    </button>
                  </div>
                  <form action="" className="mt" method="post">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            {" "}
                            AVA is here to help you{" "}
                          </h5>
                        </div>

                        <form
                          className="row g-3 needs-validation"
                          noValidate
                        >
                          <div className="col-12">
                            <label
                              htmlFor="email"
                              className="form-label"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your email!
                            </div>
                          </div>

                          <div className="col-12">
                            <label
                              htmlFor="yourPassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your password!
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                                value="true"
                                id="rememberMe"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="rememberMe"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              name="login"
                              type="button"
                            >
                              Login
                            </button>
                          </div>

                          {/* Forgot password */}
                          <div className="col-12">
                            <p className="small mb-0">
                              Forgot Password? {""}
                              <a
                                style={{ color: "green" }}
                                onClick={() => navigate("/forgotpassword")}
                              >
                                Click Me
                              </a>
                            </p>
                          </div>

                          <div className="col-12">
                            <p className="small mb-0">
                              Don't have an account?{" "}
                              <a onClick={() => navigate("/register")}>
                                Create an account
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="image-container" style={{ height: "100vh" }}>
                    <img src={picture} alt="picture" className="img-fluid h-100" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
