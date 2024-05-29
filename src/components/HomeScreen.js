import React from "react";

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div>
      {/* First header */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <button
              style={{
                borderWidth: 0,
                borderColor: "#fff",
                background: "#fff",
                color: "blue",
              }}
              href="index.html"
            >
              Vote Poll
            </button>
          </h1>
          {/* 
      <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li style={{ background: "transparent" }}>
                <a style={{ textDecoration: "none" }} className="getstarted scrollto">
                  Sign up
                </a>
              </li>
              <li>
                <a 
                onClick={() => navigate("/login")}
                style={{ textDecoration: "none" }} className="getstarted scrollto">
                 Login
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* Second header */}
      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1>CREATE BEAUTIFUL & ENGAGING POLLS</h1>
              <p>
                Please come and create your favorite poll to vote and don't worry there's a fair voting system in everything you want to vote in.
              </p>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Search trending polls..."
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  style={{
                    borderWidth: 0,
                    marginTop: "20px"
                  }}
                  className="btn-get-started scrollto"
                >
                  Create Poll
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
