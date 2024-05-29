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
          
              <li style={{background: "transparent"}}>
                <a
                  style={{ textDecoration: "none" }}
                  className="getstarted scrollto"
                  
                >
                  Create
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  className="getstarted scrollto"
                  
                >
                  {" "}
                  Try AVA{" "}
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* */}
    </div>
  );
}

export default HomeScreen;
