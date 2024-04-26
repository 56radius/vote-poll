import React from "react";
//importing css code
import ".././assets/css/style.css";

//importing css vendor variables
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function HomeScreen() {
    return(
        <div>
           <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <button
                      style={{
                        borderWidth: 0,
                        background: "#fff",
                      }}
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                  
                    </button>
                  </div>
                  <form action="" className="mt" method="post">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            {" "}
                       Strawpoll
                          </h5>
                        </div>

                        <form className="row g-3 needs-validation" noValidate>
                          <div className="col-12">
                            <label htmlFor="email" className="form-label">
                              Most Influential
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
                             
                              >
                                Click Me
                              </a>
                            </p>
                          </div>

                        </form>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
        </div>
    );
}

export default HomeScreen; 