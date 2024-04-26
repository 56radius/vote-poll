import React, { useState } from "react";

function HomeScreen() {
  const [links, setLinks] = useState([
    "https://strawpoll.com/YVyPmjpXLnN",
    "https://strawpoll.com/kogjkAm2PZ6", // Tech Savvy link
    "https://strawpoll.com/malestylistoftheyear",
    // Add links for other categories here...
  ]);
  const titles = ["Rookie of the Year", "Tech Savvy", "Male Stylist of the Year"];

  const copyToClipboard = (index) => {
    const linkToCopy = links[index];
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        console.log("Link copied to clipboard:", linkToCopy);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

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
                          style={{ width: "calc(100% - 110px)", minWidth: "250px", marginRight: "10px", padding: "10px" }}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() => copyToClipboard(index)}
                          style={{ padding: "10px 20px" }}
                        >
                          Copy
                        </button>
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
