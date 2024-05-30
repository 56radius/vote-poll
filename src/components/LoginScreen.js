import React from "react";
import { useNavigate } from "react-router-dom";

// Importing the images
import Vote from "../assets/img/voting.jpeg";
import Logo from "../assets/img/logo.png";  // Add the path to your logo image

import Swal from "sweetalert2";

function LoginScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <main style={{ height: "100vh" }}>
        <div className="container-fluid p-0" style={{ height: "100%" }}>
          <section className="section register min-vh-100 d-flex" style={{ height: "100%" }}>
            <div className="row w-100 m-0" style={{ height: "100%" }}>
              {/* Left column for the login form */}
              <div
                className="col-lg-6 d-flex flex-column align-items-start justify-content-center p-4"
                style={{
                  height: "100%",
                  borderRight: "2px solid #ccc",
                  borderRadius: "20px",
                  border: "5px solid #ccc",
                  boxSizing: "border-box",
                }}
              >
                <div className="container h-100 d-flex flex-column justify-content-center">
                  <div className="row justify-content-start">
                    <div className="col-lg-10 col-md-12 d-flex flex-column align-items-start justify-content-center">
                      <div className="d-flex justify-content-center py-4">
                        <button
                          style={{
                            borderWidth: 0,
                            background: "transparent",
                          }}
                          href="index.html"
                          className="logo d-flex align-items-center w-auto"
                        >
                        </button>
                      </div>
                      <form action="" className="w-100" method="post">
                        <div className="card mb-3" style={{ background: "transparent", border: "none" }}>
                          <div className="card-body">
                            <div className="pt-4 pb-2 text-center">
                              <img src={Logo} alt="Logo" style={{ width: "100px", marginBottom: "20px" }} /> {/* Logo added here */}
                              <h5 className="card-title text-center pb-0 fs-4">
                                Vote - Poll
                              </h5>
                            </div>

                            <form className="row g-3 needs-validation" noValidate>
                              <div className="col-12">
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email address"
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
                                  placeholder="......."
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
                                  style={{ }}
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

                              <div className="col-12 d-flex justify-content-between align-items-center">
                                <p className="small mb-0">Don't have an account?</p>
                                <button
                                  className="btn btn-secondary"
                                  onClick={() => navigate("/register")}
                                  style={{ background: "transparent", border: "1px solid #6c757d", color: "black" }}
                                >
                                  Create an account
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column for the full-sized picture */}
              <div className="col-lg-6 d-none d-lg-block p-0" style={{ height: "100%" }}>
                <img
                  src={Vote}
                  alt="Voting"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
