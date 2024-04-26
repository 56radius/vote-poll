import React, { useState } from "react";

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
    "https://strawpoll.com/bVg8oDVe3nY", // Most fashionable male
    "https://strawpoll.com/DwyoDJ7aLnA", // Entreprenuer of the year
    "https://strawpoll.com/QrgebX6x2Zp", // Sportsman of the year
    "https://strawpoll.com/e2narB1x0gB", // Sportswoman of the year
    "https://strawpoll.com/GPgV6NoPzga", // Artfully Creative of the year
    "https://strawpoll.com/eNg691VE0nA", // Most Sociable female of the year
    "https://strawpoll.com/jVyG8zm9Gn7", // Most sociable male of the year
    "https://strawpoll.com/e2narB1J0gB", // Most influential female of the year
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
    "Most influential female of the year",
  ];

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center">
                  {links.map((link, index) => (
                    <div key={index} className="mb-4" style={{ textAlign: "center" }}>
                      <h3 className="mb-2">{titles[index]}</h3>
                      <div className="input-group" style={{ maxWidth: "600px", margin: "0 auto" }}>
                        <input
                          type="text"
                          className="form-control"
                          value={link}
                          disabled
                          style={{ width: "calc(100% - 10px)", minWidth: "250px", padding: "10px", cursor: "pointer" }}
                          onClick={() => window.open(link, "_blank")}
                        />
                      </div>
                    </div>
                  ))}
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
