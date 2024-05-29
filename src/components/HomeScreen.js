import React from "react";

<<<<<<< HEAD
//importing css code
import ".././assets/css/style.css";

//importing css vendor variables
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";
=======
function HomeScreen() {
  const links = [
    "https://strawpoll.com/kogjkAm2PZ6", // Tech Savvy
    "https://strawpoll.com/GeZAO0VM1nV", // Best course rep
    "https://strawpoll.com/wAg3ArVOoy8", // Neatest Students
    "https://strawpoll.com/YVyPmjpXLnN", // Rookie of the year
    "https://strawpoll.com/BDyNEleXeZR", // Male Stylist of the year
    "https://strawpoll.com/Q0ZpRmkjEnM", // Female Stylist of the year
    "https://strawpoll.com/e7ZJGW2XPy3", // Best Instrumentalist of the year
    "https://strawpoll.com/X3nk40z7PgE", // Best vocalis
    "https://strawpoll.com/PbZqRzeWKyN", // Most fashionable female
    "https://strawpoll.com/eJnvvYKrknv", // Most fashionable male
    "https://strawpoll.com/DwyoDJ7aLnA", // Entreprenuer of the year
    "https://strawpoll.com/QrgebX6x2Zp", // Sportsman of the year
    "https://strawpoll.com/e2narB1x0gB", // Sportswoman of the year
    "https://strawpoll.com/GPgV6NoPzga", // Artfully Creative of the year
    "https://strawpoll.com/eNg691VE0nA", // Most Sociable female of the year
    "https://strawpoll.com/jVyG8zm9Gn7", // Most sociable male of the year
    "https://strawpoll.com/e2narB1J0gB", // Most influential female of the year
    "https://strawpoll.com/2ayLkYmeeZ4", // Producer Of the year
    "https://strawpoll.com/mpnboDMQQg5", // Photographer of the year
    "https://strawpoll.com/PKgl3Lqk1np", // Artist of the year
    "https://strawpoll.com/GJn478l86yz", // Most Inflential male
  ];

  const titles = [
    "Tech Savvy",
    "Best course rep",
    "Neatest Students",
    "Rookie of the year",
    "Male Stylist of the year",
    "Female Stylist of the year",
    "Best Instrumentalist of the year",
    "Best vocalis",
    "Most fashionable female",
    "Most fashionable male",
    "Entreprenuer of the year",
    "Sportsman of the year",
    "Sportswoman of the year",
    "Artfully Creative of the year",
    "Most Sociable female of the year",
    "Most sociable male of the year",
    "Most influential female",
    "Producer of the year",
    "Photographer of the year",
    "Artist of the year",
    "Most influential male"
  ];
>>>>>>> e8deef4f2022aca1dea5815c2585b6e9f6b111fd

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
